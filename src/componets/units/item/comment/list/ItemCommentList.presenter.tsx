
import ItemCommentListUI from './ItemCommentList.presenterItem'
import * as S from './ItemCommentList.styles'
export default function ItemCommentListMap (props) {
  return(
    <>
    {props.data?.fetchUseditemQuestions.map((el : any) => (
      <ItemCommentListUI
      el={el}
      />
      
    )
    )
    }
    
    </>
  )

}