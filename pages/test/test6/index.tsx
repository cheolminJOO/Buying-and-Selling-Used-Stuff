import { useRecoilState } from "recoil"
import { isEditState } from "../../../src/commons/store"
import { useRouter } from "next/router"

export default function ConnectedTestPageUI (props :any) {
  const [isEdit, setIsEdit] = useRecoilState(isEditState)
  const router = useRouter()
  const onClickBtn = () => {
    router.push('/test/test7')

  }

  return (
    <div>
      아이디 : <input defaultValue={"cheolmin"}/>
      비밀번호 : <input type="password" />
      이름 : <input defaultValue={"주철민"}/>
      <button onClick={onClickBtn}>{isEdit ?"수정하기" : "등록하기"}</button>
    </div>
  )
}