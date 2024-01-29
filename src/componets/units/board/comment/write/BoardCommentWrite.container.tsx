import { ChangeEvent, useState } from "react";
import CommentPageUi from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema } from "../../../../../commons/libraries/schemaValidation";
import { ICommentData } from "./BoardCommentWrite.types";

export default function CommentPage (props) {
  const {register , handleSubmit, formState} = useForm({
    resolver: yupResolver(commentSchema),
    mode: "onChange",
  })

  const [star , setStar] = useState(0);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
  const [contents, setContents] = useState('')
  const router = useRouter();
  

  const onClickSub = async(data : ICommentData) => {
      const result = await createBoardComment ({
        variables : {
          createBoardCommentInput: {
            writer : data.writer,
            password : data.password,
            rating: star,
            contents : contents,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId : router.query.boardId},
          },
        ],
      });
    alert("정상적으로 댓글이 달렸습니다.")
  }

  const onChangeComment = (event : ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
  }
  

  return (
    <CommentPageUi
      isEdit={props.isEdit}
      el={props.el}
      setIsEdit={props.setIsEdit}
      register={register}
      handleSubmit={handleSubmit}
      onClickSub={onClickSub}
      formState={formState}
      onChangeComment={onChangeComment}
      contents={contents}
      >
    </CommentPageUi>
  )
}