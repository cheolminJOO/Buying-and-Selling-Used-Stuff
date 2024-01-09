import CommentAnswerPage from "../../../src/componets/units/item/comment/QandA/ItemCommentQandA.container";
import ItemCommentList from "../../../src/componets/units/item/comment/list/ItemCommentList.container";
import ItemCommentPage from "../../../src/componets/units/item/comment/write/ItemComment.container";
import ItemPage from "../../../src/componets/units/item/detail/ItemDetail.container";

export default function UsedItemDetailedPage () {

  return (
  <>
    <ItemPage/>
    <ItemCommentPage/>
    <ItemCommentList/>
  </>
  )
}