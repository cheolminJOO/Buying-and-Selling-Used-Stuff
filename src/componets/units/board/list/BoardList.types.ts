import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../types/generated/types";


export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardNew: () => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  keyWord: string;

  onClickDetailedPage : (event : any) => void;
  onChangeSearchInput : any
}

export interface ITextTokenProps {
  isMatched: boolean;
}
