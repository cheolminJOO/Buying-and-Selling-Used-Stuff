import * as S from "./Pagination01.styles"
export default function Pagination01UI (props) {
  return(
    <S.Pagination>
      <span onClick={props.onClickMoveToPrev}>이전페이지</span>
      {new Array(10).fill("1").map((el,index)=> (
       index + props.start <= props.lastPage ?
        (<S.Paginations 
        id ={String(index + props.start)} 
        onClick={props.onClickMoveToPage}>
          {index + props.start}
        </S.Paginations>) :
        <span> </span>
      ))}
      <span onClick={props.onClickMoveToNext}>
         다음페이지 </span>
    </S.Pagination>
    
  )
}