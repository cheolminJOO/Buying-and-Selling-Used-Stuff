import { IQuery } from "../../../../types/generated/types";


export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList?: () => void;
  onClickMoveToBoardEdit?: () => void;
  onClickLike?: () => void;
  onClickDislike?: () => void;
  onClickMoveToPage ?: any;
  onClick ?: () => void;
  onClickDelete : () => void;

}
