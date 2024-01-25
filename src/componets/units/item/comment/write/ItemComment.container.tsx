import { useRouter } from "next/router";
import ItemCommentPageUI from "./ItemComment.presenter";
import { route } from "next/dist/server/router";
import { useMutation } from "@apollo/client";
import { IMutation, IMutationCreateUseditemQuestionArgs, IMutationUpdateUseditemQuestionArgs, IUpdateUseditemQuestionInput } from "../../../../../types/generated/types";
import { ChangeEvent, useState } from "react";
import { CREATE_USEDITEM_QUESTION, UPDATE_USEDITEM_QUESTION } from "./ItemComment.queries";
import { FETCH_USEDITEM_QUESTION } from "../list/ItemConmmentList.queries";
import Swal from "sweetalert2";
import AlertUnit from "../../../../commons/Alert/AlertUnit";
import { IItemCommentProps } from "./ItemComment.types";



export default function ItemCommentPage(props : IItemCommentProps) {
  const router = useRouter()
  const [contents, setContents] = useState("")
  const[updateUseditemQuestion] = useMutation<Pick<IMutation,"updateUseditemQuestion">,IMutationUpdateUseditemQuestionArgs>(UPDATE_USEDITEM_QUESTION)
  const [createUseditemQuestion]=useMutation<Pick<IMutation,"createUseditemQuestion">,IMutationCreateUseditemQuestionArgs>(CREATE_USEDITEM_QUESTION)

  const onChangeContents = (event : ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value)
  }

  const onClickComplteBtn = async() => {
    const result = await createUseditemQuestion({
      variables  : {
        createUseditemQuestionInput:{
          contents
        },
        useditemId : router.query.boardId,
      },
      refetchQueries: [{
        query: FETCH_USEDITEM_QUESTION,
        variables: {useditemId : router.query.boardId}
      }]
    })
    console.log(result)
    AlertUnit("댓글 등록이 완료 됐습니다.")
  }
  const onClickUpdateBtn = async() => {
     try {
            const updateQuestion: IUpdateUseditemQuestionInput = {};
            if (contents) updateQuestion.contents = contents;
            await updateUseditemQuestion ({
              variables : {
                updateUseditemQuestionInput : updateQuestion,
                useditemQuestionId : props.el?._id
              },
              refetchQueries: [{
                query: FETCH_USEDITEM_QUESTION,
                variables: {useditemId : router.query.boardId}
              }]
            })
            props.setIsEdit(false)
          } catch (error) {
            if (error instanceof Error) alert(error.message)
          }
  }
  return (
    <ItemCommentPageUI
    onClickComplteBtn={onClickComplteBtn}
    onChangeContents={onChangeContents}
    onClickUpdateBtn={onClickUpdateBtn}
    contents={contents}
    isEdit={props.isEdit}
    el={props.el}
    setIsEdit={props.setIsEdit}

    />
  )
}