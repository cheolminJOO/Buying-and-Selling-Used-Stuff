import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {useState } from "react";
import TestPageUi from "./TestPage.prejenter";
import {CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE} from "./TestPage.queries"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../commons/libraries/schemaValidation";
import "react-quill/dist/quill.snow.css"
import { IMyVariable, ITestPageWrite } from "./TestPage.type";


interface IFormData {
  writer ?:string
  title ?: string
  contents ?: string
  password ?: string
}


export default function TestPage (props : ITestPageWrite) {
  const {register , handleSubmit, formState,setValue,trigger} = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const router = useRouter()
  const [updateBoard] = useMutation(UPDATE_BOARD)
  const [createBoard] = useMutation(CREATE_BOARD)
  const [isActive, setIsActive] = useState(false)
  const [isOpen,setIsOpen] = useState(false)
  const [fileUrls, setFileUrls] = useState(["","",""])
  const [address,setAddress] = useState("")
  const [zipcode,setZipcode] = useState("")
  const [addressDetail, setAddressDetail] = useState("")
  const onChangeFileUrls = (fileUrl : string, index : number) => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }
 
    const handleok = () => {
      if(!address) {
        alert("뭐하시나요 ?? 입력하세요")
        return
      }
      setIsOpen(false)
    }

    const handlecancel = () => {
      setIsOpen(false)
    }
  

  const onClickAddressSearch = () => {
    setIsOpen(true);
  }

  const onCompleteAddressSearch = (address) => {
    setAddress(address.address);
    setZipcode(address.zonecode);
    setIsOpen(false);
  }


  const onClickEdit = async(data : any) => {


    const myVariable : IMyVariable  = {}

    
    if(data.title) myVariable.title = data.title;
    if(data.contents) myVariable.contents = data.contents;
    if(zipcode || address || addressDetail) {
      myVariable.boardAddress = {};
      if(zipcode) myVariable.boardAddress.zipcode = zipcode;
      if(address) myVariable.boardAddress.address = address;
      if(data.addressDetail) myVariable.boardAddress.addressDetail = data.addressDetail;
    }
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password: data.password,
            updateBoardInput: myVariable,
          },
        });
        router.push(`/boards/${result.data.CREATE_BOARD._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

    

  const onClickFinalSubmit = async(data : any) => {
      const result = await createBoard({
        variables: {
          createBoardInput : {
            writer : data.writer,
            password : data.password,
            title : data.title,
            contents: data.contents,
            images: [...fileUrls],
            boardAddress: {
              zipcode,
              address,
              addressDetail : data.addressDetail 
      },
          }
        }
      })
      alert("성공적으로 내용이 저장됐습니다.")
      router.push(`/boards/${result.data.createBoard._id}`)
      console.log(result)
  }

  return (
    <TestPageUi
      isActive={isActive}
      onClickEdit={onClickEdit}
      isOpen={isOpen}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      zipcode={zipcode}
      address={address}
      isEdit={props.isEdit}
      data={props.data}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      register = {register}
      handleSubmit = {handleSubmit}
      onClickFinalSubmit = {onClickFinalSubmit}
      formState = {formState}
      setValue={setValue}
      trigger={trigger}
      handleok={handleok}
      handlecancel={handlecancel}
      />
  )
}