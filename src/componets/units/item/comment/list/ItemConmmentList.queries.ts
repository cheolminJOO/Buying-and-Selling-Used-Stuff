import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTION = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page : Int) {
    fetchUseditemQuestions(useditemId : $useditemId, page : $page) {
      _id,
      contents,
      user{_id,name,picture}
      createdAt,



    }
  }

`

export const DELETE_USEDITEM_QUESTION =
gql`

  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId : $useditemQuestionId) 
  }
`


export const CREATE_USEDITEM_QUESTION_ANSWER = gql`
   mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput:CreateUseditemQuestionAnswerInput!,
    $useditemQuestionId: ID!){
    createUseditemQuestionAnswer(createUseditemQuestionAnswerInput:$createUseditemQuestionAnswerInput,
      useditemQuestionId : $useditemQuestionId){
      _id
    }
   }
`