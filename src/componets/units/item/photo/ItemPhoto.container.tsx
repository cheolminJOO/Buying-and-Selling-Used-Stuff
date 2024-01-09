import PhotoUploadUI from "./ItemPhoto.presenter";

export default function PhotoUpload (props) {
  return (
    <PhotoUploadUI
      index ={props.index}
      fileUrl={props.fileUrl}
      onChangeFileUrls={props.onChangeFileUrls}
    />
  )
}