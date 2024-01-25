import { useState } from "react";
import CommentPageUi from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { PropertySafetyFilled } from "@ant-design/icons";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { commentSchema, schema } from "../../../../../commons/libraries/schemaValidation";
import { ICommentData } from "./BoardCommentWrite.types";

export default function CommentPage (props) {
  const {register , handleSubmit, formState} = useForm({
    resolver: yupResolver(commentSchema),
    mode: "onChange",
  })
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star , setStar] = useState(0);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
  const router = useRouter();

  const onChangeStar = (value : any) => {
    setStar(value)
    console.log(setStar)
  }
  

  const onClickEditBtn = async() => {
    try {
      const updateBoadrd = {};
      if (contents) updateBoadrd.contents = contents;
      if (star !== PropertySafetyFilled.el?.rating) updateBoadrd.rating = star;
      await updateBoardComment({
        variables : {
          updateBoardCommentInput : updateBoadrd,
          password,
          boardCommentId : props.el?._id
        },
        refetchQueries : [
          {
            query : FETCH_BOARD_COMMENTS,
            variables : {boardId : router.query.boardId}
          }
        ]
      })
      props.setIsEdit?.(false)
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }

  }

  const onClickSub = async(data : ICommentData) => {
      const result = await createBoardComment ({
        variables : {
          createBoardCommentInput: {
            writer : data.writer,
            password : data.password,
            rating: star,
            contents : data.contents,
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
    console.log(data)
    alert("정상적으로 댓글이 달렸습니다.")
  }
  

  return (
    <CommentPageUi
      onChangeStar = {onChangeStar}
      isEdit={props.isEdit}
      el={props.el}
      setIsEdit={props.setIsEdit}
      onClickEditBtn={onClickEditBtn}
      register={register}
      handleSubmit={handleSubmit}
      onClickSub={onClickSub}
      formState={formState}
      >
    </CommentPageUi>
  )
}