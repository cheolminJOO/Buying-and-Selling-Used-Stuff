import * as S from './AccessCreateUser.styles'
import { ICreateUserPageUI } from './AccessCreateUser.types'

export default function CreateUserPageUI (props : ICreateUserPageUI) {
  return(
    <>
      이메일 입력 : <input onChange={props.onChangeEmail} type=" text"/>
      비밀번호 입력 : <input onChange={props.onChangePassword} type="password"/>
      이름 입력 : <input onChange={props.onChangeName} type="text"/>
    </>


  )
}