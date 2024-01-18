import { useRouter } from "next/router"
import BoardDetailUi from "./BoardDetail.presenter"
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries"
import { useMutation, useQuery } from "@apollo/client"
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage"


export default function DetailedPage (props) {
  const {onClickMoveToPage} = useMoveToPage()
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const router = useRouter()
  console.log(router)
  const {data} = useQuery(FETCH_BOARD, {
    variables : {boardId : router.query.boardId}
  })
  console.log("데이터",data)


  const onClickDelete = async() => {
    await deleteBoard({
      variables: {
        boardId : router.query.boardId
      },

    })
  }


  return(
    <BoardDetailUi
    data = {data}
    onClickDelete = {onClickDelete}
    onClickMoveToPage = {onClickMoveToPage}
    >
    </BoardDetailUi>
  )
}