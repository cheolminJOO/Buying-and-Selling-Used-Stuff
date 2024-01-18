import { gql } from "@apollo/client";


export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      _id
      title
      contents
      likeCount
      createdAt
      images
      boardAddress{zipcode, address, addressDetail}
      user{picture,name}
    }
  }
`

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId : ID!){
    deleteBoard(boardId : $boardId)
  }

`