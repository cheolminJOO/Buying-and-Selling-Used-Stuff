import React from "react";
import * as S from './AccessLoginPage.styles'

export default function LoginPageUI(props) {
  return (
    <S.Container>
      <S.Box>
        <S.HeaderTitle>
          로그인
        </S.HeaderTitle>
        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <div>
           
            <S.Input
              type="text"
              {...props.register("email")}
              placeholder="ID를 입력하세요."
            />
          </div>
          <div>{props.errorEmail}</div>

          <div>
            <S.Input
              type="password"
              {...props.register("password")}
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <div>{props.errorPassword}</div>
          <S.ButtonDiv>
          <S.LoginBtn type="submit">로그인하기</S.LoginBtn>

          <S.SignUpBtn type="button" onClick={props.onClickSignUp}>
            회원가입하기
          </S.SignUpBtn>
          </S.ButtonDiv>
        </form>
      </S.Box>
    </S.Container>
  );
}