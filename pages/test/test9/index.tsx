import { useRecoilState } from "recoil"
import { contentss, writers } from "../../../src/commons/store"
import { useRouter } from "next/router"

export default function TestUI () {
  const [writer , setWriter] = useRecoilState(writers)
  const [contents, setContents] = useRecoilState(contentss)
  const router= useRouter()
  const onClickBtn = () => {
    router.push('/test/test8')
  }

  return (
    <>
    <div>{writer}</div>
    <div>{contents}</div>
    <button onClick ={onClickBtn}>돌아가기</button>
    </>
  )
} 