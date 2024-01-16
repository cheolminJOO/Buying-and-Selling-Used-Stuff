import { useMutation, useQuery } from "@apollo/client"
import { UPLOAD_FILE } from "../item/photo/ItemPhoto.queries"
import { useRef, useState } from "react"
import { Modal } from "antd"
import MyPageUI from "./ItemMypage.presenter"
import { FETCH_USER_INFO, UPDATE_USER_INPUT } from "./ItemMypage.queries"
import AlertUnit from "../../commons/Alert/AlertUnit"
import Swal from "sweetalert2"
import { Router } from "express"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { myImage } from "../../../commons/store"


export default function MyPage () {
  const router = useRouter()
  const[uploadFile] = useMutation(UPLOAD_FILE)
  const[updateUser] = useMutation(UPDATE_USER_INPUT)
  const [image,setImage] = useState("")
  const [fileUrl,setFileUrl] = useState("")
  const fileRef = useRef(null)
  const {data} = useQuery(FETCH_USER_INFO)
  const[name,setName] = useState(data?.fetchUserLoggedIn?.name)

  const [profileImage, setProfileImage] = useRecoilState(myImage)
  

  const onChangeFileUrl = (url) => {
    setFileUrl(url)
  }

  const onChangeImage = async(event) => {

    const file =event.target?.files?.[0]
    console.log("여긴파일", event.target?.files?.[0])

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (event) => {
      if (typeof event.target?.result ==="string")
      setImage(event.target?.result)
      
    }
    
    try{
      const result = await uploadFile({
        variables : {
          file : file
        }
      })
      onChangeFileUrl(result.data.uploadFile.url)
      console.log(onChangeFileUrl)

      

    }catch (error) {
      if(error instanceof Error) Modal.error({content: error.message})

    }
  }

  const onClickRef = () => {
    fileRef.current?.click()
  }

  const onClickUpdateBtn = async () => {
    try {
      // updateUser 뮤테이션 실행
      const result = await updateUser({
        variables: {
          updateUserInput: {
            name: name,
            picture: image,
          },
        },
      });
  
      // updateUser 뮤테이션이 성공하면 SweetAlert2 실행
      await Swal.fire({
        icon: 'info',
        width: '400px',
        title: `<span style="font-size: 20px; font-weight: bolder;">수정이 완료 됐습니다.</span>`,
        confirmButtonText: '확인',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
        reverseButtons: true,
      });
  
      // SweetAlert2에서 확인을 누르면 페이지 이동 및 프로필 이미지 업데이트
      router.push('/');
      setProfileImage(image);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };
  console.log("profileImage", profileImage)

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  return(
    <>
    <MyPageUI
    image={image}
    fileRef={fileRef}
    onChangeImage={onChangeImage}
    onClickRef={onClickRef}
    onChangeName={onChangeName}
    onClickUpdateBtn={onClickUpdateBtn}
    data={data}
    name={name}
    />
    </>
  )
}