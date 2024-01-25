
import Pagination01 from "../../../commons/pagination/01/Pagination01.container";
import * as S from "./BoardList.styles"
import { getDate } from "/src/commons/utills/utill"

export default function BoardListV (props) {
  const onClickBasket = (basket) => () => {
    const baskets= JSON.parse(
      localStorage.getItem("baskets")??"[]"
    )

    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 담은 물건입니다람쥐초등학교");
      return;
    }
    console.log(temp)

    baskets.push(basket)
    localStorage.setItem("baskets", JSON.stringify(baskets))
  }

  return(

<S.Wrapperwrapper>
  <S.Wrapper>
    <S.HeaderWrapper>
      검색어 입력 :  
      <S.SearchInput 
      type="text"
      onChange={props.onChangeSearchInput}/>

    </S.HeaderWrapper>
      <S.Title>
        <S.Tit>번호</S.Tit>
        <S.Tit>제목</S.Tit>
        <S.Tit>작성자</S.Tit>
        <S.Tit>날짜</S.Tit>
      </S.Title>
      <div style={{height : "550px"}}>
    {props.data?.fetchBoards.map((el, index) => (
    <div
    >
      <S.Row key={el.id}>
        <S.ColumnId>{index +1}</S.ColumnId>
        <S.ColumnTitle 
        id={el._id}
        onClick = {props.onClickDetailedPage}>
          {el.title.replaceAll(props.keyWord,`!@#${props.keyWord}!@#`).split("!@#")
        .map((el)=> (
          <span style={{color : el === props.keyWord ? "red" : "black"}}>
            {el}
          </span>
        ))}
        </S.ColumnTitle>
        <S.ColumnWriter>{el.writer}</S.ColumnWriter>
        <S.ColumnCreatedAt>{getDate(el.createdAt)}</S.ColumnCreatedAt>
        <S.BlankDiv onClick={onClickBasket(el)}></S.BlankDiv>
      </S.Row>
    </div>
    )
    )}
    </div>
    <Pagination01 
    refetch = {props.refetch} 
    count = {props.count}/>
  <S.NewBtn onClick={props.onClickMoveToBoardNew}>작성하기</S.NewBtn>
  </S.Wrapper>

</S.Wrapperwrapper>
  )
}
