import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { isEditState } from "../../../src/commons/store"
import ConnectedTestPageUI from "../test6"

export default function ReUseComponentTest () {

  const [isEdit, setIsEdit] = useRecoilState(isEditState)
  const router = useRouter()

  const onClickBtn = () => {
    router.push('/test/test7')

  }

  return (
    <>
    <ConnectedTestPageUI 
    isEdit = {isEdit}
    onClickBtn={onClickBtn}
    />
    </>
  )
}