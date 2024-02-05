import { MouseEvent } from "react"
import * as S from "./LayoutHeader.styles"
import { string } from "prop-types"

interface ILayoutHeaderUIProps  {
onClickLogin : (event : MouseEvent<HTMLDivElement>) => void
onClickImg :(event : MouseEvent<HTMLImageElement>) => void
onClickLogout :(event : MouseEvent<HTMLButtonElement>) => void
onClickClose :(event : MouseEvent<HTMLButtonElement>) => void
onClickMoveToPage : any
isEdit : boolean
result : any
accessToken : any
data : any
isActive : boolean
token ?: any
profileImage : any

}


export default function LayoutHeaderUI (props: ILayoutHeaderUIProps ) {

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Logo onClick={props.onClickMoveToPage('/boards')}>
        💎 BUSU
        </S.Logo>
        <S.WrapperRight>
          {props.accessToken && (
          <S.Settings>
            <S.ImgStyleWrapper>
            <S.LeftWrapper>
              {props.data?.fetchUserLoggedIn.picture && (
            <S.ImgStyle 
            onClick={props.onClickImg}
            src={props.profileImage || '/avatar.png'}/>
            
            )}
            {!props.data?.fetchUserLoggedIn.picture && (
              <S.ImgStyle
              src = 'https://hanghaelv4.s3.ap-northeast-2.amazonaws.com/avatar.png'/>
            )}
            <S.Nickname>{props.data?.fetchUserLoggedIn.name}</S.Nickname>
            </S.LeftWrapper>
            
            {props.isActive && (
              <S.ButtonWrapper>
            <S.MypageBtn onClick={props.onClickMoveToPage('/mypage')}>마이페이지</S.MypageBtn>
            <S.LogoutBtn onClick = {props.onClickLogout}>로그아웃</S.LogoutBtn>
            <S.CloseBtn onClick ={props.onClickClose}>닫기</S.CloseBtn>
            </S.ButtonWrapper>
            )}
            {!props.isActive && (
              <span></span>
            )}
          </S.ImgStyleWrapper>
          </S.Settings>
          )}
          {!props.accessToken &&(
          <S.LoginBtn onClick={props.onClickLogin}>
          로그인하기
          </S.LoginBtn>
          )}


          <S.SignUpBtn onClick={props.onClickMoveToPage('/sign')}>
            {props.result ? "" : "로그인"}  
          </S.SignUpBtn>
        </S.WrapperRight>
      </S.InnerWrapper>
    </S.Wrapper>
  )
}
