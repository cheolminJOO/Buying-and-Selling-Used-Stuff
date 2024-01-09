import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react"
import { UPLOAD_FILE } from "./Uploads01.queries";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import { Modal } from "antd";
import Uploads01UI from "./Uploads01.presenter";

export default function Uploads01(props){
  const [image,setImage] = useState("")
  const fileRef = useRef(null);
  const[uploadFile] = useMutation(UPLOAD_FILE)

  const onClickUpload = () => {
    fileRef.current?.click();
  }

  const onChangeFile = async (event :ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    console.log(file)
    if (!file) return

    // 진짜 URL

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (event) => {
      console.log(event.target?.result)
      if (typeof event.target?.result ==="string")
      setImage(event.target?.result)

    }

    try {
      const result = await uploadFile({
        variables : {
          file : file
        }
      })
      props.onChangeFileUrls(result.data.uploadFile.url,props.index)
      console.log(props.onChangeFileUrls)
  
    } catch (error) {
      if (error instanceof Error) Modal.error ({content: error.message})
    }
  }
  return(
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      image={image}
      />
  )
}