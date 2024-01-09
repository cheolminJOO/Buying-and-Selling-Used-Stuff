import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput:CreateUseditemInput!){
            createUseditem(createUseditemInput:$createUseditemInput){
      _id
    }
  }

`

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!,
  $useditemId: ID!){
    updateUseditem(updateUseditemInput : $updateUseditemInput,
    useditemId : $useditemId){
      _id

    }
  }

`

export const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput:CreateUseditemQuestionInput!, $useditemId: ID! ){
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId: $useditemId ){
      _id

    }
  }

`