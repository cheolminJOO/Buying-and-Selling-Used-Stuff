import { ChangeEvent, useRef } from "react"
import * as S from "./ItemPhoto.styles"
import { Modal } from "antd";
import { UPLOAD_FILE } from "./ItemPhoto.queries";
import { useMutation } from "@apollo/client";

export default function PhotoUploadUI (props) {
  const fileRef = useRef(null)
  const[uploadFile] = useMutation(UPLOAD_FILE)

  const onClickRealInput = () => {
    fileRef.current?.click();

  }

  const onChangeImage = async(event : ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    console.log(file)
    try{
      const result = await uploadFile ({
        variables : {
          file : file
        }
      })
      props.onChangeFileUrls(result.data.uploadFile.url,props.index)
      console.log(result)

    }catch (error){
      if(error instanceof Error) Modal.error({content:error.message})
    }


  }

  return (
    <div>
      <div>
        {!props.fileUrl && (
        <S.FakeInput onClick={onClickRealInput}>
          사진 업로드
        </S.FakeInput>
        )}
      </div>
      {props.fileUrl && (
        <S.ImageUpload 
        onClick={onClickRealInput}
        src={`https://storage.googleapis.com/${props.fileUrl}`}
        
        />
          
        )}
      <S.RealInput 
      type="file"
      ref={fileRef}
      onChange={onChangeImage}
      />
    </div>
  )
}
