import { ChangeEvent } from "react";

export interface ILoginPageUI {
  onChangePWInput : (event : ChangeEvent<HTMLInputElement>) => void;
  onChangeEmailInput : (event : ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp : () => void;
  onClickLogin : () => void;
  errorEmail : string;
  errorPassword : string;
  register : any;
  handleSubmit : any;
}