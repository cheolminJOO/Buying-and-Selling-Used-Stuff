

import { useAuth } from "../../../src/commons/libraries/useAuth";
import ItemWrite from "../../../src/componets/units/item/write/ItemWrite.container";

export default function ItemBoardPage() {
  useAuth()
  //@ts-expect-error
  return <ItemWrite isEdit={false}/>
}