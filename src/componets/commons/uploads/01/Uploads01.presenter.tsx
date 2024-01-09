import { UploadButton, UploadFileHidden, UploadImage } from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return(
    <>
      {props.image ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={props.image}
          />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>        
        </UploadButton>
      
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}/>

    </>

  )
}