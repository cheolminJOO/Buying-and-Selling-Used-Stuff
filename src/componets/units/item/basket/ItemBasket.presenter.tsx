import BasketListUI from "./basketList/ItemBasketList.presenter";

import * as S from './ItemBasket.styles'

export default function BasketStructureUI (props) {
  return(
    <S.Container>
      <S.TItleTextWrapper>
    <S.TitleSpan>현재 픽한 상품의 개수는</S.TitleSpan>
    <S.CountSpan>{props.data?.fetchUseditemsCountIPicked}</S.CountSpan>
    <S.TitleSpan>개 입니다.</S.TitleSpan>
    </S.TItleTextWrapper>

    <S.ListContainer>
    {props.item?.fetchUseditemsIPicked.map((el) => (
      <BasketListUI el={el}/>
    ))}
    </S.ListContainer>
    </S.Container>
  )
}
