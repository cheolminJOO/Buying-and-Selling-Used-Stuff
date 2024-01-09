import { gql } from "@apollo/client";

export const UPDATE_USER_INPUT = gql`
  mutation updateUser($updateUserInput:UpdateUserInput!
 ) {
    updateUser(updateUserInput : $updateUserInput) {
      _id

    }
  }


`