import { useMutation, useQuery } from "@apollo/client"
import { FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from "./BoardCommentList.queries"
import { useRouter } from "next/router"
import BoardCommentListUI from "./BoardCommentList.presenter"
import { useState } from "react"


export default function BoardCommentList() {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const {data} = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {boardId : router.query.boardId}
    
  })
  const onClickEditBtn = async() => {
    setIsEdit(true)


  }
  return (
    
    <BoardCommentListUI 
    data={data}
    isEdit={isEdit}
    onClickEditBtn={onClickEditBtn}
    setIsEdit={setIsEdit}
    />
    
  )
}