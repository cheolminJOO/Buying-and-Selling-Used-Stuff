import { useRecoilState } from "recoil"
import { isEditState } from "../../../src/commons/store"
import { useRouter } from "next/router"

export default function TestDetailedPage () {
  const [isEdit, setIsEdit] = useRecoilState(isEditState)
  const router= useRouter()
  const onClickBtn = () => {
    setIsEdit((prev) => !prev)
    router.push('/test/test6')
  }

  return(
    <>
    <button onClick={onClickBtn}>수정하기</button>
    </>
  )
}