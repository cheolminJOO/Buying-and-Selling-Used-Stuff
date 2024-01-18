import { gql } from "@apollo/client";

export const FETCH_PICKED = gql`
  query fetchUseditemsCountIPicked{
    fetchUseditemsCountIPicked
  }
`

export const FETCH_USEDITEMS_PICKED = gql`
  query fetchUseditemsIPicked($page:Int, $search:String){
    fetchUseditemsIPicked(page:$page, search:$search){
      _id
      name
      remarks
      contents
      price
      images
      seller{
        name
        picture
      }
    }
  }
`