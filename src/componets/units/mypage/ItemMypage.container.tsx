import { useMutation } from "@apollo/client"
import { UPLOAD_FILE } from "../item/photo/ItemPhoto.queries"
import { useRef, useState } from "react"
import { Modal } from "antd"
import MyPageUI from "./ItemMypage.presenter"
import { UPDATE_USER_INPUT } from "./ItemMypage.queries"


export default function MyPage () {
  const[uploadFile] = useMutation(UPLOAD_FILE)
  const[updateUser] = useMutation(UPDATE_USER_INPUT)
  const [image,setImage] = useState("")
  const [fileUrl,setFileUrl] = useState("")
  const fileRef = useRef(null)
  const[name,setName] = useState("")

  const onChangeFileUrl = (url) => {
    setFileUrl(url)
  }

  const onChangeImage = async(event) => {
    const file =event.target?.files?.[0]
    console.log("여긴파일", event.target?.files?.[0])

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (event) => {
      console.log(event.target?.result)
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

  const onClickUpdateBtn = async() => {
    const result = await updateUser({
      variables : {
        updateUserInput : {
          name : name,
          picture : image,
        }
      }
    })
  }

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
    />
    </>
  )
}