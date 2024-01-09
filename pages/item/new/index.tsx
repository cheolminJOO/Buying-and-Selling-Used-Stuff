

import { useAuth } from "../../../src/commons/libraries/useAuth";
import ItemWrite from "../../../src/componets/units/item/write/ItemWrite.container";

export default function ItemBoardPage() {
  useAuth()
  
  return <ItemWrite isEdit={false}/>
}