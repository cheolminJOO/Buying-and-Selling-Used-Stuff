import { useRef, useState } from "react"

export default function ImageUploadReview () {
 const [image, setimage] = useState("")
 const fileRef = useRef(null)
 const onClickImage = () => {
	fileRef.current?.click()
 }

 const onChangeImage = (event) => {
	const file = event.target.files?.[0]
	


 const fileReader = new FileReader()
 fileReader.readAsDataURL(file)
 fileReader.onload = (event) => {
	console.log(event.target?.result)
	if(typeof event.target?.result === "string")
	setimage(event.target?.result)
 }

 console.log(fileReader.result)
}

	return (
		<>
		<button onClick={onClickImage}>이미지선택</button>
		<input style = {{display : 'none'}}type="file"
		ref={fileRef}
		onChange={onChangeImage}
		/>

		<img style = {{width : "200px", height : "200px"}}src={image}/>
		</>
	)
}