import { useQuery } from "@apollo/client";
import BasketStructureUI from "./ItemBasket.presenter";
import { FETCH_PICKED } from "./ItemBasket.queries";

export default function BasketStructure () {
  const {data} = useQuery(FETCH_PICKED)
  console.log(data)
  return(
    <BasketStructureUI
    data={data}
    />
  )
}