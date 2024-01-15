import React from "react";

export default function LoginPageUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <div>
        ID 입력: 
        <input
          type="text"
          {...props.register("email")}
        />
      </div>
      <div>{props.errorEmail}</div>

      <div>
        비밀번호 입력: 
        <input
          type="password"
          {...props.register("password")}
        />
      </div>
      <div>{props.errorPassword}</div>

      <button type="submit">로그인하기</button>

      <button type="button" onClick={props.onClickSignUp}>
        회원가입하기
      </button>
    </form>
  );
}