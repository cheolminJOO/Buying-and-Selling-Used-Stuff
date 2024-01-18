import BasketListUI from "./basketList/ItemBasketList.presenter";

import * as S from './ItemBasket.styles'

export default function BasketStructureUI (props) {
  return(
    <S.Container>
    <div>현재 픽한 상품의 개수는 {props.data?.fetchUseditemsCountIPicked}개 입니다.</div>
    <S.ListContainer>
    {props.item?.fetchUseditemsIPicked.map((el) => (
      <BasketListUI el={el}/>
    ))}
    </S.ListContainer>
    </S.Container>
  )
}
