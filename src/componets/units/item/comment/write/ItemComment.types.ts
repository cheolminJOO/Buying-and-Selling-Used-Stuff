import { ChangeEvent } from "react";

export interface IItemCommentProps {
  isEdit ?: boolean;
  setIsEdit ?: any;
  el ?: any;
}

export interface IItemCommentPageUi {
  onClickComplteBtn : () => void;
  onChangeContents : (event : ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdateBtn : () => void;
  contents : string;
  isEdit : boolean;
  setIsEdit : any;
  el : any;

}

export interface IUpdateQuestion {
  contents ?: string;

}