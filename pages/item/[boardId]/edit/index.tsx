import { useQuery } from "@apollo/client";
import ItemWrite from "../../../../src/componets/units/item/write/ItemWrite.container";
import { FETCH_USED_ITEM } from "../../../../src/componets/units/item/detail/ItemDetail.queries";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../src/types/generated/types";
import { useRouter } from "next/router";

export default function EditPage() {
  const router = useRouter()

  const {data} = useQuery<Pick<IQuery,"fetchUseditem">,IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
    //@ts-expect-error
    variables : { useditemId : router.query.boardId}
  })
  return (
    <ItemWrite
    isEdit={true}
    data = {data}
    />

  )
}