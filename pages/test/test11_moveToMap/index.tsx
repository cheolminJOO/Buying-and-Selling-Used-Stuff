import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

export default function MoveToPage () {


  return(
    <div>
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기 !</button> */}
      <Head>
        <script type="text/javascript" 
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=18260005708de9c19fe96a4dff026f6c&libraries=services">
        </script>
      </Head>
        <Link href={"/test/test10_map"}>
          <a>맵으로 이동하기 !!</a>
          </Link>

    </div>

    
  ) 
}