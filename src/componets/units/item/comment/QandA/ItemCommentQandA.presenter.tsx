export default function CommentAnswerPageUI (props) {
  return(
    <div>
    {!props.data?.fetchUseditemQuestionAnswers[0]?.contents && (
    <div>
    {!props.isUp && (
      <button onClick={props.onClickComCom}>답글달기</button>
    )}
    {props.isUp && (
      <div>
      <input onChange={props.onChangeComment}/>
      <button onClick={props.onClickComment}>코멘트 달기</button>
      </div>
    )}
    </div>
    )}
     {props.data?.fetchUseditemQuestionAnswers[0]?.contents && (
      <>
      <div>작성자 : {props.data?.fetchUseditemQuestionAnswers[0]?.user.name}</div>
      <div>내용 : {props.data?.fetchUseditemQuestionAnswers[0]?.contents}</div>


      </>
      
    )}
    </div>
  )
}

