import { ChangeEvent, MouseEvent } from "react";

export interface IItemBoardListUI {
  data : any;
  onChangeSearchInput : (event : ChangeEvent<HTMLInputElement>) => void;
  keyWord : string;
  onClickMoveToBoardNew : () => void;
  onClickDetailedPage : any;
  refetch : any;
  count : number;
  onClickPick : (event : MouseEvent<HTMLButtonElement>) => void;
}