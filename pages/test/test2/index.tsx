import { set } from "lodash"
import { ChangeEvent, useState } from "react"

export default function Review () {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [nameError, setNameError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const onChangeName = (event : ChangeEvent<HTMLInputElement>) => {
		console.log(event)
		setName(event.target.value)
		if(!event.target.value) {setNameError("입력하세요")}else{setNameError("")}

	}

	const onChangePassword = (event : ChangeEvent<HTMLInputElement> ) => {
		setPassword(event.target.value)
		if(!password) {setPasswordError("입력하세요")} else{setPasswordError("")}
	}

	const onClickBtn = () => {
		if(name.length < 5){
			setNameError("5자 이상 입력하세요")
		}
		if(password.length < 7) {
			setPasswordError("7자 이상 입력하세요")
		}
	}

	

	return(
		<>
		 id 입력 :<input type="text" defaultValue={"aaa"}onChange={onChangeName}/>
		 <div>{nameError}</div>
		 password 입력 : <input type="password" onChange={onChangePassword}/>
		 <div>{passwordError}</div>
		 <button onClick={onClickBtn}>제출하기</button>
		</>

	)
}