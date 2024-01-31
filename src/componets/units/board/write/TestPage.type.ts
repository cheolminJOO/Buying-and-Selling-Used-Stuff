import { ChangeEvent } from "react";
import { FormState } from "react-hook-form";
import { IQuery } from "../../../../types/generated/types";

export interface IMyVariable {
  title ?: String;
  contents ?: String;
  boardAddress ?: {
    zipcode ?: String;
    address ?: String;
    addressDetail ?: String;
  }
}

export interface ITestPageWrite {
  isEdit : boolean ;
  data : any
}

export interface IIsActive {
  isActive ?: boolean
}


export interface ITestPageUI {
  isActive?: boolean;
  onClickAddressSearch?: () => void;
  onCompleteAddressSearch?: (data: any) => void;
  onChangeFileUrls?: (fileUrls: string, index: number) => void;
  onClickEdit?: (data : any) => void;
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen?: boolean;
  zipcode?: string;
  address?: string;
  fileUrls?: string[];
  setValue ?: any;
  trigger ?: any;
  handleSubmit ?: any;
  handleok ?: () => void;
  formState ?: any;
  register ?: any;
  onChangeFile ?: any;
  onClickFinalSubmit ?: any;
  handlecancel : () => void;
  aaa ?: any


}