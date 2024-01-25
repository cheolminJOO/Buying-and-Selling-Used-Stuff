import { useMutation, useQuery } from "@apollo/client";
import CommentAnswerPageUI from "./ItemCommentQandA.presenter";
import { CREATE_QNA, FETCH_QNA } from "./ItemCommentQandA.queries";
import { ChangeEvent, useState } from "react";

export default function CommentAnswerPage (props) {
  const[contents,setContents]= useState("")
  const[isActive,setIsActive]= useState(false)
  const[isUp,setIsUp] = useState(false)
  const [createUseditemQuestionAnswer] = useMutation(CREATE_QNA)
  const {data} = useQuery(FETCH_QNA,{
    variables : {useditemQuestionId : props.el?._id}
  })

  const onClickComCom = () => {
    
    setIsUp(true)
  }
  

  const onChangeComment = async(event : ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
  }

  const onClickComment = async() => {
    const result = await createUseditemQuestionAnswer({
      variables:{
        createUseditemQuestionAnswerInput : {
          contents : contents
        },
        useditemQuestionId : props.el?._id
      },
      refetchQueries : [{
        query: FETCH_QNA,
        variables: {
          useditemQuestionId : props.el?._id
        }
      }]
    }
    )
    if(!data){
      setIsUp(true)}
      else{
      setIsUp(false)
    }
  
  }

  return(
    <CommentAnswerPageUI
    onChangeComment={onChangeComment}
    onClickComment={onClickComment}
    data={data}
    isActive={isActive}
    contents={contents}
    isUp={isUp}
    onClickComCom={onClickComCom}
    />

  )
}





