import { ChangeEvent, MouseEvent } from 'react';
export interface ICommentData {
  
  writer : string;
  password : string;
  rating : any;
  contents : string;
}


export interface ICommentPageUI {
  onChangeStar : () => void;
  onChangeComment : (event : ChangeEvent<HTMLInputElement>) => void;
  isEdit : boolean ;
  el : any;
  setIsEdit : any;
  onClickEditBtn : () => void;
  onClickSub : () => void;
  register : any;
  handleSubmit : any;
  formState : any;
  contents : string;


}