import { useState } from 'react'
import { getDate } from '../../../../../commons/utills/utill'
import * as S from './ItemCommentList.styles'
import ItemCommentPage from '../write/ItemComment.container'
import { useMutation } from '@apollo/client'
import { IMutation, IMutationDeleteUseditemQuestionArgs, IMutationUpdateUseditemQuestionArgs, IUpdateUseditemQuestionInput } from '../../../../../types/generated/types'
import { CREATE_USEDITEM_QUESTION_ANSWER, DELETE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTION } from './ItemConmmentList.queries'
import { useRouter } from 'next/router'
import CommentAnswerPage from '../QandA/ItemCommentQandA.container'
import React from 'react';
import AlertUnit from '../../../../commons/Alert/AlertUnit'
import { UPDATE_USEDITEM_QUESTION } from '../write/ItemComment.queries'
import Swal from 'sweetalert2'
interface ItemCommentListUIProps {
  el: any; // 또는 실제 타입으로 변경
}

const ItemCommentListUI: React.FC<ItemCommentListUIProps> = ({ el }) => {
  
  const[isActive, setIsActive] = useState(false)
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [deleteUseditemQuestion] = useMutation<Pick<IMutation,"deleteUseditemQuestion">,IMutationDeleteUseditemQuestionArgs>(DELETE_USEDITEM_QUESTION)
  const[updateUseditemQuestion] = useMutation<Pick<IMutation,"updateUseditemQuestion">,IMutationUpdateUseditemQuestionArgs>(UPDATE_USEDITEM_QUESTION)


  const onClickUpdateBtn = async () => {
    Swal.fire({
      width: '400px',
      title:
        '<span style="font-size: 24px; font-weight: bolder;">수정할 내용을 입력하세요</span>',
      input: 'text',
      // inputValue: content,
      confirmButtonText: '수정하기',
      cancelButtonText: '취소하기',
      showCancelButton: true,
      reverseButtons: true,
      inputValidator: (value) => {
        if (!value) {
          return '수정할 내용을 입력하세요';
        }
        if (value.length > 20) {
          return '20자만 입력이 가능합니다.';
        }
        return '';
      },
    }).then(async (editResult) => {
      if (editResult.isConfirmed) {
        const updatedContents = editResult.value;
        if (updatedContents && updatedContents.length <= 20) {
          await updateUseditemQuestion({
            variables: {
              updateUseditemQuestionInput: {
                contents: updatedContents,
                // updateQuestion 변수는 어디서 가져오는지 확인이 필요합니다.
              },
              useditemQuestionId: el?._id,
            },
          });
        }
      }
    });
  };

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
  AlertUnit("댓글 삭제가 됐습니다.")
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
            onClick={onClickUpdateBtn}
            src='/pencil.png'/>
            <S.XImg 
            onClick={onClickDeleteBtn}
            src='/clear.png'/>
          </S.ImgWrapper>
          
        </S.RightContentsWrapper>
      </S.Wrapper>
      
    </S.BigWrapper>
    )}
    
    
    </div>
  )
}
export default ItemCommentListUI;