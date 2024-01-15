import { useState } from 'react'
import { getDate } from '../../../../../commons/utills/utill'
import * as S from './ItemCommentList.styles'
import ItemCommentPage from '../write/ItemComment.container'
import { useMutation } from '@apollo/client'
import { IMutation, IMutationDeleteUseditemQuestionArgs } from '../../../../../types/generated/types'
import { CREATE_USEDITEM_QUESTION_ANSWER, DELETE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTION } from './ItemConmmentList.queries'
import { useRouter } from 'next/router'
import CommentAnswerPage from '../QandA/ItemCommentQandA.container'
import React from 'react';
interface ItemCommentListUIProps {
  el: any; // 또는 실제 타입으로 변경
}

const ItemCommentListUI: React.FC<ItemCommentListUIProps> = ({ el }) => {
  
  const[isActive, setIsActive] = useState(false)
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [deleteUseditemQuestion] = useMutation<Pick<IMutation,"deleteUseditemQuestion">,IMutationDeleteUseditemQuestionArgs>(DELETE_USEDITEM_QUESTION)


  const onClickEditBtn = () => {
    setIsEdit(true)
  }

  const onClickDeleteBtn = async() => {
  const result = await deleteUseditemQuestion({
    variables: {
      useditemQuestionId : el._id
    },
    refetchQueries: [{
      query: FETCH_USEDITEM_QUESTION,
      variables: {useditemId : router.query.boardId}
    }]
  })
}

  const onClickCreateAnswer = async() => {

    setIsActive(true)
  }
  return (
    <div>
    {!isEdit &&(
    <S.BigWrapper>
      <S.Wrapper>
        <S.LeftContentsWrapper>
          <S.AvatarImg src={el.user.picture}/>
            <S.TextWrapper>
              <S.Writer>
                {el.user.name}
              </S.Writer>
              <S.Contents>
                {el.contents}
              </S.Contents>
              <S.Date>
                {getDate(el.createdAt)}
              </S.Date>
                                
              <CommentAnswerPage
              el={el}
              isActive={isActive}
              setIsActive={setIsActive}/>
  
            </S.TextWrapper>
        </S.LeftContentsWrapper>
        <S.RightContentsWrapper>
          <S.ImgWrapper>
            <S.PencilImg 
            onClick={onClickEditBtn}
            src='/pencil.png'/>
            <S.XImg 
            onClick={onClickDeleteBtn}
            src='/clear.png'/>
          </S.ImgWrapper>
          
        </S.RightContentsWrapper>
      </S.Wrapper>
      
    </S.BigWrapper>
    )}
    {isEdit && (
      <ItemCommentPage
      isEdit={isEdit}
      el={el}
      setIsEdit={setIsEdit}

      />
    )}
    
    </div>
  )
}
export default ItemCommentListUI;