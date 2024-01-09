import { useQuery } from "@apollo/client";
import ItemPageUI from "./ItemDetail.presenter";
import { FETCH_USED_ITEM } from "./ItemDetail.queries";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../types/generated/types";


export default function ItemPage () {
  const router = useRouter();

  const onClickMoveToEdit = () => {
    router.push(`/item/${router.query.boardId}/edit`)
  }

  if (typeof router.query.number ! == "string"){
    alert("올바르지 않은 게시글 아이디입니다.")
    void router.push("/")
    return<></>
  }
  const {data} = useQuery<Pick<IQuery,"fetchUseditem">,IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
    variables : { useditemId : router.query.boardId}
  })
  console.log(data)

  const onClickMoveToBoard = () => {
    router.push("/item")
  }

  return (
    <ItemPageUI
      data={data}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToBoard={onClickMoveToBoard}
      

  
    />
  )
}