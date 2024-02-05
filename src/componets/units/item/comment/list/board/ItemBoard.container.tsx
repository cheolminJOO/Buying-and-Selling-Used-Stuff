import { useMutation, useQuery } from "@apollo/client"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import _ from 'lodash'
import { useRouter } from "next/router";
import ItemBoardListUI from "./ItemlBoard.presenter";
import { FETCH_COUNT, FETCH_USED_ITEMS, TOGGLE_ITEM_PICK } from "./ItemBoard.queries";

export default function ItemBoard () {

  const {data, refetch} = useQuery(FETCH_USED_ITEMS)
  console.log("나는 무슨 데이터일까 ? ", data)
  const [keyWord,setKeyWord] = useState("")
  const {data : list, refetch : listRefetch} = useQuery(FETCH_COUNT)
  const router = useRouter();
  const [toggleItemPick] = useMutation(TOGGLE_ITEM_PICK)

  const onClickPick = async(event) => {
    console.log(event.target.id)
    const result = await toggleItemPick ({
      variables: {
        useditemId : event.target.id
      }
    })
    alert("픽 됐습니다. 장바구니에서 확인하세요.")
  }

  const getDebounce = _.debounce((value)=> {
    void refetch({search : value, page : 1})
    setKeyWord(value)
  }, 500)

  const onChangeSearchInput = (event : ChangeEvent<HTMLInputElement>) => {
    getDebounce( event.currentTarget.value)
    
  }

  const onClickDetailedPage = (id :string ) => (event) =>  {
   router.push(`/item/${id}`)
   event.stopPropagation();
  }

  
  const onClickMoveToBoardNew = () => {
    router.push("/item/new")
  }

  return (
    <ItemBoardListUI
    data={data}
    onChangeSearchInput={onChangeSearchInput}
    keyWord={keyWord}
    onClickMoveToBoardNew={onClickMoveToBoardNew}
    onClickDetailedPage={onClickDetailedPage}
    refetch={refetch}
    count={list?.fetchBoardsCount}
    onClickPick={onClickPick}
    />

  )

}
