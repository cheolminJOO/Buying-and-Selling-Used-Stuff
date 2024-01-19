

import { getDate } from "../../../../../../commons/utills/utill";
import Pagination01 from "../../../../../commons/pagination/01/Pagination01.container";
import * as S from "./ItemBoard.styles"


export default function ItemBoardListUI (props) {
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
    <div>
      중고마켓
    </div>
    <S.HeaderWrapper>
      검색어 입력 :  
      <S.SearchInput 
      type="text"
      onChange={props.onChangeSearchInput}/>

    </S.HeaderWrapper>
      <S.Title>
        <S.Tit>번호</S.Tit>
        <S.Tit>상품명</S.Tit>
        <S.Tit>한줄설명</S.Tit>
        <S.Tit>날짜</S.Tit>
        <S.Tit>기타</S.Tit>
      </S.Title>
      <div style={{height : "550px"}}>
    {props.data?.fetchUseditems.map((el, index) => (
    <div
    >
      <S.Row 
      key={el.id} >
        <S.ColumnId>{index +1}</S.ColumnId>
        <S.ColumnTitle >
          {el?.name.replaceAll(props.keyWord,`!@#${props.keyWord}!@#`).split("!@#")
        .map((el)=> (
          <span style={{color : el === props.keyWord ? "red" : ""}}>
            {el}
          </span>
        ))}
        </S.ColumnTitle>
        <S.ColumnWriter>{el?.remarks}</S.ColumnWriter>
        <S.ColumnCreatedAt
        >{getDate(el.createdAt)}</S.ColumnCreatedAt>
        <S.DetailedBtnWidController>
        <S.DetailedBtn       
        id={el._id}
        onClick = {props.onClickDetailedPage}>
          상세페이지
        </S.DetailedBtn>
        </S.DetailedBtnWidController>
        <S.GotoBasket 
        id={el._id}
        onClick={props.onClickPick}>
          픽미
          </S.GotoBasket>
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
