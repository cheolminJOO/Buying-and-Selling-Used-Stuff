import { gql } from "@apollo/client";

export const CREATE_QNA = gql`
  mutation createUseditemQuestionAnswer ($ createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!,
    $useditemQuestionId: ID!
) {
    createUseditemQuestionAnswer (createUseditemQuestionAnswerInput: $ createUseditemQuestionAnswerInput,
      useditemQuestionId: $useditemQuestionId) {
        _id

    }
  }
`

export const FETCH_QNA = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId:ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId:$useditemQuestionId){
      contents,
      createdAt,
      user{name}

    }

  }

`