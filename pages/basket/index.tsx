import { useAuth } from "../../src/commons/libraries/useAuth";
import BasketStructure from "../../src/componets/units/item/basket/ItemBasket.container";

export default function Basket () {
  useAuth()

  return(
    <BasketStructure/>
  )
}