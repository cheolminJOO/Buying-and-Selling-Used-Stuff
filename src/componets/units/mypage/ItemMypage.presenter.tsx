import * as S from './ItemMyPage.styles'

export default function MyPageUI (props) {

  return(
    

    <S.BigWrapper>
      <S.HeaderWrapper>
        <div>마이페이지</div>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.InputTitle>
          닉네임
        </S.InputTitle>
        <S.NameInput 
        type='text'
        onChange={props.onChangeName}
        defaultValue={props?.data?.fetchUserLoggedIn.name}
        />
        <S.InputTitle>
          이미지
        </S.InputTitle>
        <S.PictureWrapper>
          <button onClick={props.onClickRef}>등록하기</button>
          <input style=
            {{display:"none"}}
            type="file" 
            onChange={props.onChangeImage}
            ref={props.fileRef}/>
            <S.ImageSpace src = {props.image || props?.data?.fetchUserLoggedIn.picture}/>
        </S.PictureWrapper>
      </S.BodyWrapper>
      <S.FooterWrapper>
        <S.Information>
        </S.Information>
        <button onClick={props.onClickUpdateBtn}>수정하기</button>
      </S.FooterWrapper>
     


      

    </S.BigWrapper>
  )

}
