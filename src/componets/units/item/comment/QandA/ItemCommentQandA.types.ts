import { ChangeEvent } from "react";

export interface CommentAnswerPageUI {
  onChangeComment : (event : ChangeEvent<HTMLInputElement>) => void;
  onClickComment : () => void;
  data : any;
  isActive : boolean;
  contents : string;
  isUp : boolean;
  onClickComCom :  () => void;
}