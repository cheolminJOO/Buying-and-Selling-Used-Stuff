import { useMutation } from "@apollo/client";
import CreateUserPageUI from "./AccessCreateUser.presenter";
import { CREATE_USER } from "./AccessCreateUser.queries";
import {ChangeEvent, useState} from "react"
import { Alert, Modal } from "antd";
import { useRouter } from "next/router";

export default function CreateUserPage () {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = (event : ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onChangeName = (event : ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onChangePassword = (event : ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onClickCreateUser = async() => {
    try{
    await createUser ({
      variables : {
        createUserInput : {
          email : email,
          password : password,
          name : name
        }
      }
    })
    alert("등록이 성공적으로 됐습니다.")
    
    router.push('/login')
  }catch(error) {
    if(error instanceof Error) Modal.error({content : error})
  }
  }

  return(
    <CreateUserPageUI
    onChangeEmail={onChangeEmail}
    onChangeName={onChangeName}
    onChangePassword={onChangePassword}
    onClickCreateUser={onClickCreateUser}
    />

  )
}