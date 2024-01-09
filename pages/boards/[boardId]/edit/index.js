import { gql, useQuery } from "@apollo/client";
import TestPage from "/src/componets/units/board/write/TestPage.container";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
    }
  }
}
`

export default function TestPg() {
  const router = useRouter();
  
  const{data} = useQuery(
    FETCH_BOARD, 
    { variables : { boardId : router.query.boardId}
  })

  return (
    <TestPage 
    isEdit={true}
    data={data}/>
  )
}