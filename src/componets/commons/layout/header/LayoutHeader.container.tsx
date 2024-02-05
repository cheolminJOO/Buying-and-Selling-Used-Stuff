import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import {useRecoilState} from "recoil"
import {MouseEvent, useEffect, useState} from "react"
import { accessTokenState, isEditState, myImage } from "../../../../commons/store";
import { gql, useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../units/access/AccessLoginPage.queries";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

const LOGOUT_USER = gql`
  mutation logoutUser{
    logoutUser
  }
`

export default function LayoutHeader () {
  const [isEdit, setIsEdit] = useRecoilState(isEditState)
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN);
  const [isActive, setIsActive] = useState(false)
  const {onClickMoveToPage} = useMoveToPage()
  const [profileImage, setProfileImage] = useRecoilState(myImage)
console.log("헤더",data?.fetchUserLoggedIn.picture)
console.log("나도 찍히니?")
  const result =() => {
    if(accessToken){
      setIsEdit(true)
    }
  }
  const router = useRouter();

  const onClickLogin = (event : MouseEvent<HTMLDivElement>) => {
    if(accessToken) {
      setIsEdit(true)
    }
    router.push('/login')

  }

  const onClickImg = (event : MouseEvent<HTMLImageElement>) => {
    setIsActive((prev) => !prev)
  }
  

  const onClickLogout = (event : MouseEvent<HTMLButtonElement>) => {
    setAccessToken("")
    setIsActive(false)
  }

  const onClickClose = (event : MouseEvent<HTMLButtonElement>) => {
    setIsActive(false)
  }



  return(
    <LayoutHeaderUI 
    onClickLogin={onClickLogin}
    isEdit={isEdit}
    onClickImg={onClickImg}
    result={result}
    accessToken={accessToken}
    data={data}
    isActive={isActive}
    onClickLogout={onClickLogout}
    onClickClose={onClickClose}
    onClickMoveToPage={onClickMoveToPage}
    profileImage={profileImage}
    />
  )
}

