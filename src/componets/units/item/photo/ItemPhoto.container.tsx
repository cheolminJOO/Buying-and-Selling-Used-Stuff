import PhotoUploadUI from "./ItemPhoto.presenter";
import { IPhotoUploadProps } from "./ItemPhoto.types";

export default function PhotoUpload (props : IPhotoUploadProps) {
  return (
    <PhotoUploadUI
      index ={props.index}
      fileUrl={props.fileUrl}
      onChangeFileUrls={props.onChangeFileUrls}
    />
  )
}