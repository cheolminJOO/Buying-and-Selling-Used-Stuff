import { useState } from 'react'
import { getDate } from '../../../../../commons/utills/utill'
import * as S from './ItemCommentList.styles'
import ItemCommentPage from '../write/ItemComment.container'
import { useMutation } from '@apollo/client'
import { IMutation, IMutationDeleteUseditemQuestionArgs } from '../../../../../types/generated/types'
import { CREATE_USEDITEM_QUESTION_ANSWER, DELETE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTION } from './ItemConmmentList.queries'
import { useRouter } from 'next/router'
import CommentAnswerPage from '../QandA/ItemCommentQandA.container'
export default function ItemCommentListUI 
(props) {
  
  const[isActive, setIsActive] = useState(false)
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  const [deleteUseditemQuestion] = useMutation<Pick<IMutation,"deleteUseditemQuestion">,IMutationDeleteUseditemQuestionArgs>(DELETE_USEDITEM_QUESTION)


  const onClickEditBtn = () => {
    setIsEdit(true)
    console.log(props.el)
  }

  const onClickDeleteBtn = async() => {
  const result = await deleteUseditemQuestion({
    variables: {
      useditemQuestionId : props.el._id
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
          <S.AvatarImg src={props.el.user.picture}/>
            <S.TextWrapper>
              <S.Writer>
                {props.el.user.name}
              </S.Writer>
              <S.Contents>
                {props.el.contents}
              </S.Contents>
              <S.Date>
                {getDate(props.el.createdAt)}
              </S.Date>
                                
              <CommentAnswerPage
              el={props.el}
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
      el={props.el}
      setIsEdit={setIsEdit}

      />
    )}
    
    </div>
  )
}