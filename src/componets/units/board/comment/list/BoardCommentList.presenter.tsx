
import { useQuery } from '@apollo/client';
import BoardComeentItem from './BoardCommentList.presenterItem'
import InfiniteScroll from 'react-infinite-scroller';
import { IQuery, IQueryFetchBoardCommentsArgs } from '../../../../../types/generated/types';
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries';
import { useRouter } from 'next/router';


export default function BoardCommentListUI(props) {
  const router = useRouter()
  const {data, fetchMore} = useQuery<Pick<IQuery,"fetchBoardComments">, IQueryFetchBoardCommentsArgs >(FETCH_BOARD_COMMENTS, {
    variables: {boardId : router.query.boardId}
    
  })


  const onLoadMore = (): void => {
    void fetchMore({
      variables :{page : Math.ceil(( data?.fetchBoardComments.length ?? 10)) / 10},
      updateQuery : (prev,{fetchMoreResult}) => {

        // if(!fetchMoreResult.fetchBoardComments){
        //   return {
        //     fetchBoardComments : [...prev.fetchBoardComments]
        //   }
        // }

        // return (
        //   fetchBoardComments : [...prev.fetchBoardComments , fetchMoreResult.fetchBoardComments],
        // );
      },
    });
  };

  return (
    <>
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}> 
      {data?.fetchBoardComments.map((el,index) => (
      
        <BoardComeentItem key={el._id} 
        el={el} 
        onClickEditBtn={props.onClickEditBtn} 
        />
      ))}
    </InfiniteScroll>
    </>
  )
}