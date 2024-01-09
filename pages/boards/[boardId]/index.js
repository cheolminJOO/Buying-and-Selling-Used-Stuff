import BoardCommentList from "../../../src/componets/units/board/comment/list/BoardCommentList.container";
import CommentPage from "../../../src/componets/units/board/comment/write/BoardCommentWrite.container";
import DetailedPage from "../../../src/componets/units/board/detail/BoardDetail.container";


export default function DetailedPg () {
  return(
    <>
    <DetailedPage/>
    <CommentPage/>
    <BoardCommentList/>
    </>
  )
}