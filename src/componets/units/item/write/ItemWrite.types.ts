import { ChangeEvent } from "react";

export interface ItemWriteProps {
  isEdit : boolean ;
  data : any
}

export interface IItemUpdateProps {
  name : string;
  summary : string;
  desc : string;
  price : number;
}

export interface IItemData {
  name : string;
  summary : string;
  desc : string;
  tag : string[];
  price : number;
  address : string
}


export interface IItemWritePresenter {
  isEdit : boolean;
  data : any;
  onClickUpdate : (data : IItemUpdateProps) => void;
  onChangeFileUrls : (fileUrl : string, index : number) => void;
  fileUrls : any
  register : any
  handleSubmit : any
  formstate : any
  onUseHook : (data : IItemData) => void;
  onChangekeyWord : (event : ChangeEvent<HTMLInputElement>) => void;

}