
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


  const onLoadMore = () => {
    // 데이터가 없으면 실행하지 않는다. (처음에 데이터가 undefined일 때 무한 스크롤이 실행 되는 것을 방지하기 위함)
    if (data === undefined) return; 
  
      void fetchMore({
        variables: {
          // 다음 페이지(불러올 페이지) : 기존에 받아온 data에서  길이를 가져와서 활용한다.
          page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1
        }, 
  
        // useQuery로 받아온 data를 update한다.
        updateQuery: (prev, { fetchMoreResult }) => {
          // prev: 기존의 data
          // {fetchMoreResult} : 추가로 요청해서 받아온 내용
  
          // 새로 조회해온 값이 없으면 기존 것을 그대로 업데이트한다.
          if (fetchMoreResult.fetchBoardComments === undefined)
            return { fetchBoardComments: [...prev.fetchBoardComments] };
  
          // 가져온 내용으로 return (update한다.)
          return {
            // 기존의 것과 추가로 받은 것을 합친다.
            fetchBoardComments: [
              ...prev.fetchBoardComments,
              ...fetchMoreResult.fetchBoardComments,
            ], 
          };
        },
      });
    };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}> 
      {data?.fetchBoardComments.map((el,index) => (
      
        <BoardComeentItem key={el._id} 
        el={el} 
        onClickEditBtn={props.onClickEditBtn} 
        />
      ))}
    </InfiniteScroll>

  )
}