import { ChangeEvent } from "react";

export interface ICreateUserPageUI {
  onChangeEmail : (event : ChangeEvent<HTMLInputElement>) => void;
  onChangeName : (event : ChangeEvent<HTMLInputElement>) => void;
  onChangePassword : (event : ChangeEvent<HTMLInputElement>) => void;
  onClickCreateUser : () => void;
}