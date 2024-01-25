import { useState } from 'react'
import * as S from './ItemMyPage.styles'

export default function MyPageUI (props) {
  const [isEdit, setIsEdit] = useState(false)
  const onClickEditBtn = () => {
    setIsEdit(true)
  }

  const onClickCancelBtn = () => {
    setIsEdit(false)
  }

  return(
    <S.BigWrapper>
      <S.BoxDiv>
      <S.HeaderWrapper>
        <S.HeaderTitle>마이페이지</S.HeaderTitle>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.InputTitle>
          닉네임
        </S.InputTitle>
        {!isEdit && (
          <S.Nickname>{props?.data?.fetchUserLoggedIn.name}</S.Nickname>
        )}
        {isEdit && (
        <S.NameInput 
        type='text'
        onChange={props.onChangeName}
        defaultValue={props?.data?.fetchUserLoggedIn.name}
        />
        )}
        <S.InputTitle>
          이미지
        </S.InputTitle>
        <S.PictureWrapper>

          
          <input style=
            {{display:"none"}}
            type="file" 
            onChange={props.onChangeImage}
            ref={props.fileRef}/>
            <S.ImageSpace src = {props.image || props?.data?.fetchUserLoggedIn.picture}/>
            {isEdit && (
            <S.SubmitBtn onClick={props.onClickRef}>사진 바꾸기</S.SubmitBtn>
            )}
        </S.PictureWrapper>
      </S.BodyWrapper>
      <S.FooterWrapper>
        <S.Information>
        </S.Information>
        {!isEdit && (
        <button onClick={onClickEditBtn}>수정하기</button>
        )}
        {isEdit && (
          <S.ButtonDiv>
            <S.CancelBtn onClick={onClickCancelBtn}> 취소하기</S.CancelBtn>
            <S.OkBtn onClick = {props.onClickUpdateBtn}> 등록하기</S.OkBtn>
          </S.ButtonDiv>
        )}
      </S.FooterWrapper>
      </S.BoxDiv>
    </S.BigWrapper>
  )

}
