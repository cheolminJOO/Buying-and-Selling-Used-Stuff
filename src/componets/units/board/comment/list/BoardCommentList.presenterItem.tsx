import CommentPageUi from "../write/BoardCommentWrite.presenter";
import * as S from "./BoardCommentList.styles"
import {getDate} from "../../../../../commons/utills/utill"
import CommentPage from "../write/BoardCommentWrite.container";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_BOARD, DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";


export default function BoardCommentItem (props) {
  const router = useRouter()
  const [isOpenDeleteModal,setIsOpenDeleteModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)
  const [isCancel, setIsCancel] = useState(false)
  const [myPassword, setMyPassword] = useState("")
    const onClickEditBtn = async() => {
    setIsEdit(true)
  }

  const onClickDelete = async() => {
    try{
      await deleteBoardComment ({
        variables : {
          password : myPassword,
          boardCommentId : props.el?._id
        },
        refetchQueries :[
          {
          query : FETCH_BOARD_COMMENTS,
          variables : {boardId : router.query.boardId}
        }]
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({content :error.message})
    }
  }
  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true)
  }

  const onChangeDeletePassword = (event) => (
    setMyPassword(event.target.value)
  )

  const onCancelDeletModal = () => {
    setIsOpenDeleteModal(false)
  }

  return (
    <div>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete} onCancel={onCancelDeletModal}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange ={onChangeDeletePassword}/>
        </Modal>
      )}
        {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.MainWrapper>
              <S.WriterImage src='/avatar.png'></S.WriterImage>
              <S.WriterWrapper>
                <S.WriterAndStar>
                  <S.Writer>{props.el.writer}</S.Writer>
                  <S.RateStar allowHalf defaultValue={2.5} value={props.el.rating} disabled/>
                </S.WriterAndStar>
                <S.Contents>{props.el.contents}</S.Contents>
              </S.WriterWrapper>

            </S.MainWrapper>
            <S.OptionWrapper>
              <S.EditIcon id={props.el.id} onClick={onClickEditBtn} src="/mode-24px.png"></S.EditIcon>
              <S.DeleteIcon2 onClick={onClickOpenDeleteModal} src="/clear-24px 2.png"></S.DeleteIcon2>
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.FooterWrapper>
              <S.Date>{getDate(props.el.createdAt)}</S.Date>  

              
          </S.FooterWrapper>
        </S.ItemWrapper>
        )}
        {isEdit && (
          <CommentPage 
          isEdit={isEdit} 
          setIsEdit={setIsEdit} 
          el={props.el} 
          onClickEditBtn={props.onClickEditBtn} />
        )}
    
    </div>
  )
}