import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems ($page:Int, $search:String){
    fetchUseditems(page:$page, search:$search){
      _id,
      name,
      remarks,
      contents,
      price,
      createdAt,
      images,

    }
  }

`

export const FETCH_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search : $search) 
  }

`

export const TOGGLE_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!){
    toggleUseditemPick(useditemId : $useditemId)

    
  }
`