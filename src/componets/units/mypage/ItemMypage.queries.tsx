import { gql } from "@apollo/client";

export const UPDATE_USER_INPUT = gql`
  mutation updateUser($updateUserInput:UpdateUserInput!
 ) {
    updateUser(updateUserInput : $updateUserInput) {
      _id

    }
  }
`
export const FETCH_USER_INFO = gql`
  query fetchUserLoggedIn{
    fetchUserLoggedIn{
      picture,
      name,
    }
  }

`