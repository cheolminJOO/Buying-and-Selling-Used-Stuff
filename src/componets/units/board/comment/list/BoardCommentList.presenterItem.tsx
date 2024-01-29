import * as S from "./BoardCommentList.styles"
import {getDate} from "../../../../../commons/utills/utill"
import CommentPage from "../write/BoardCommentWrite.container";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import {  DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";


export default function BoardCommentItem (props) {
  const router = useRouter()
  const [isOpenDeleteModal,setIsOpenDeleteModal] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)
  const [isCancel, setIsCancel] = useState(false)
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)
  const [contents, setContents] = useState('')
  const [star, setStar] = useState(0)
  const [myPassword, setMyPassword] = useState("")
  const [starError, setStarError] = useState("")
    const onClickEdit = async() => {
      setIsOpenEditModal((prev) => !prev)
  }

  const onClickEditBtn = async() => {
    try {
      await updateBoardComment({
        variables : {
          updateBoardCommentInput : {
            contents : contents,
            rating : star,
          },
          password : myPassword,
          boardCommentId : props.el?._id
        },
        refetchQueries : [
          {
            query : FETCH_BOARD_COMMENTS,
            variables : {boardId : router.query.boardId}
          }
        ]
      })
      props.setIsEdit?.(false)
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
    setIsOpenEditModal((prev) => !prev)

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

  const onChagneComment = (event : ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
  }

  const onChangeStar = (value : any) => {
    setStar(value)
    console.log(setStar)
  }

  return (
    <S.Container>
    <div>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete} onCancel={onCancelDeletModal}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="string" onChange ={onChangeDeletePassword}/>
        </Modal>
      )}
      {isOpenEditModal && (
        <Modal visible={true} onOk={onClickEditBtn} onCancel={onClickEdit}>
          <S.EditModalDiv>
            <S.EditModalContentsDiv>
              <span>Password : </span>
              <S.PasswordInput type="password" onChange ={onChangeDeletePassword}/>
            </S.EditModalContentsDiv>
          <S.EditModalContentsDiv>
          <span>Comments : </span>
          <S.PasswordInput type="string" onChange ={onChagneComment}/>
          {contents.length>20 && (
          <div>20자가 넘었습니다.</div>
          )}
          </S.EditModalContentsDiv>
          <S.EditModalContentsDiv>          
            <span>Star  : </span>
          <S.Star 
          allowHalf 
          defaultValue={2.5} 
          onChange={onChangeStar}/>
          <div>{starError}</div>
          </S.EditModalContentsDiv>

          </S.EditModalDiv>
        </Modal>
      )}
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
              <S.EditIcon id={props.el.id} onClick={onClickEdit} src="/pencil.png"></S.EditIcon>
              <S.DeleteIcon2 onClick={onClickOpenDeleteModal} src="/clear.png"></S.DeleteIcon2>
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.FooterWrapper>
              <S.Date>{getDate(props.el.createdAt)}</S.Date>  

              
          </S.FooterWrapper>
        </S.ItemWrapper>
    
    </div>
    </S.Container>
  )
}