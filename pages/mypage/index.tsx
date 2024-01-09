import { useAuth } from "../../src/commons/libraries/useAuth";
import MyPage from "../../src/componets/units/mypage/ItemMypage.container";

export default function MyPG () {
  useAuth()
  
  return(
    <>
    <MyPage/>
    </>
  )

}