import { useQuery } from "@apollo/client"
import BoardListV from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT} from "./BoardList.queries"
import { useState } from "react";
import _ from 'lodash'
import { useRouter } from "next/router";


export default function DetailedBoard () {
  const {data, refetch} = useQuery(FETCH_BOARDS)
  const [keyWord,setKeyWord] = useState("")
  const {data : list, refetch : listRefetch} = useQuery(FETCH_BOARDS_COUNT)
  const router = useRouter();
  
  const getDebounce = _.debounce((value)=> {
    void refetch({search : value, page : 1})
    setKeyWord(value)
  }, 2000)



  const onClickDetailedPage = (event) => {
  router.push(`/boards/${event.target.id}`)

  }
  

  const onChangeSearchInput = (event) => {
    getDebounce( event.currentTarget.value)
    

  }
  console.log("리렌더링중")
  const onClickMoveToBoardNew = () => {
    router.push("/boards/new")
  }

  


  return (
    <BoardListV
    data={data}
    onChangeSearchInput={onChangeSearchInput}
    keyWord={keyWord}
    onClickMoveToBoardNew={onClickMoveToBoardNew}
    onClickDetailedPage={onClickDetailedPage}
    refetch={refetch}
    count={list?.fetchBoardsCount}

    >
      
    </BoardListV>
  )

}
