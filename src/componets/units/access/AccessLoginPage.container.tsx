import { ChangeEvent, useState } from "react";
import LoginPageUI from "./AccessLoginPageUI";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./AccessLoginPage.queries";
import Swal from 'sweetalert2'
import { Modal } from "antd";
import {useForm  } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function LoginPage () {
  const{register, handleSubmit} = useForm()
  const router = useRouter()
  const [loginUser] = useMutation(LOGIN_USER)
  const[errorEmail, setErrorEmail] = useState("")
  const[errorPassword, setErrorPassword] = useState("")
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)


  const onChangeEmailInput = (event : ChangeEvent<HTMLInputElement>) => {
    const aa = (event.target.value)
    if(aa) {
    setErrorEmail("")
    }else {
      setErrorEmail("아이디를 입력하세요")
    }
  }

  const onChangePWInput = (event : ChangeEvent<HTMLInputElement>) => {
    const aa = (event.target.value)
    if(aa) {
      setErrorPassword("")
    }else {
      setErrorPassword("비밀번호를 입력하세요")
    }
    
  }

  const onClickLogin = async(data) => {
    if(!data.email || !data.password) {
      alert("다시 한번 확인하세요")
      return
    }

    try {
    const result = await loginUser({
      variables : {
        email : data.email,
        password : data.password,
      }
    })
    setAccessToken(result?.data?.loginUser?.accessToken)
    Swal.fire({
      icon: 'error',
      width: '400px',
      title: '성공적으로 로그인이 됐습니다.',
      confirmButtonText: '확인',
      showLoaderOnConfirm: true, // true로 하면 로딩 때 스피너 보여줌
      allowOutsideClick: () => !Swal.isLoading(), // 로딩중이 아니라면 외부를 눌렀을 떄 닫힘. 로딩중이면 안 닫힘
    }).then((result) => {
      if (result.isConfirmed) { // 확인을 눌렀다면
        router.push("/")
      }
    })
  }catch{
      if(Error) {
        Modal.error({content: "로그인에 실패하셨습니다."})
      }
    }
  }

  const onClickSignUp = () => {
    router.push("/create")

  }





  return(
    <LoginPageUI
    onChangePWInput={onChangePWInput}
    onChangeEmailInput={onChangeEmailInput}
    onClickSignUp={onClickSignUp}
    onClickLogin={onClickLogin}
    errorEmail={errorEmail}
    errorPassword={errorPassword}
    register={register}
    handleSubmit={handleSubmit}
    
    />
  )
}