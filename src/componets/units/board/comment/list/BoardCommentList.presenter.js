
import BoardComeentItem from './BoardCommentList.presenterItem'


export default function BoardCommentListUI(props) {
  if (!props.data) return <div />

  return (
    <>
    {props.data?.fetchBoardComments.map((el,index) => (
    <BoardComeentItem key={el._id} 
    el={el} 
    onClickEditBtn={props.onClickEditBtn} 
    />
    ))}
    </>
  )
}