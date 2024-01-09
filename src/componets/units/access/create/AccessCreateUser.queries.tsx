import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $createUserInput: CreateUserInput!
  ){
    createUser(
      createUserInput: $createUserInput
    ){
      _id   }
  }

`

export const UPLOAD_FILE = gql`
  mutation uploadFile($file : Upload!){
    uploadFile(file : $file){
      url
    }
  }
`