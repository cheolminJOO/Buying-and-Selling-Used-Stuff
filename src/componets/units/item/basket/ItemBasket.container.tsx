import { useQuery } from "@apollo/client";
import BasketStructureUI from "./ItemBasket.presenter";
import { FETCH_PICKED, FETCH_USEDITEMS_PICKED } from "./ItemBasket.queries";

export default function BasketStructure () {
  const {data} = useQuery(FETCH_PICKED)
  const {data: item} = useQuery(FETCH_USEDITEMS_PICKED, {
    variables: { search: "" },
  })
  console.log("찜",item)
  return(
    <BasketStructureUI
    data={data}
    item={item}
    />
  )
}