import { useRouter } from "next/router"
import BoardCommentListUI from "./BoardCommentList.presenter"
import { useState } from "react"



export default function BoardCommentList() {
  const [isEdit, setIsEdit] = useState(false)
  const onClickEditBtn = async() => {
    setIsEdit(true)


  }
  return (
    
    <BoardCommentListUI 
    isEdit={isEdit}
    onClickEditBtn={onClickEditBtn}
    setIsEdit={setIsEdit}
    />
    
  )
}