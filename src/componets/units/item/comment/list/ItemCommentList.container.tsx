import { useMutation, useQuery } from "@apollo/client";
import ItemCommentListUI from "./ItemCommentList.presenter";
import { DELETE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTION } from "./ItemConmmentList.queries";
import { useRouter } from "next/router";
import { IMutation, IMutationDeleteUseditemQuestionArgs, IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../../types/generated/types";
export default function ItemCommentList () {
  const router= useRouter();

  const {data} = useQuery<Pick<IQuery,"fetchUseditemQuestions">,IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTION, {
    variables : {useditemId : router.query.boardId}
  })
  console.log(data)




  console.log(data)
  return (
    <ItemCommentListUI
    data={data}
    
    />
  )
}