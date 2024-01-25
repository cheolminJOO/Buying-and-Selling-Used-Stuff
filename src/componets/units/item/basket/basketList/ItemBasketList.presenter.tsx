import { useRouter } from "next/router"
import * as S from "./ItemBasketList.styles"
import { IBasketEl } from "./ItemBasketList.types"

const BasketListUI : React.FC<IBasketEl> = ({el}) => {
  const router = useRouter()
  const onClickContainer = (id) => () => {
    router.push(`item/${id}`)
  }

  console.log("el",el)

  return(
    <S.Container onClick={onClickContainer(el?._id)}>
      <S.Box>
      <S.Category> 제목 : {el?.name}</S.Category>
      <S.Category> 내용 : {el?.remarks}</S.Category>
      <S.Category> 가격 : {el?.price}원</S.Category>
      <S.Line></S.Line>
      <span>작성자</span>
      <S.Category> 닉네임 : {el?.seller?.name}</S.Category>
      </S.Box>
    </S.Container>

  )
}
export default BasketListUI