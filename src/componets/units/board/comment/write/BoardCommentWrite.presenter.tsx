import * as S from "./BoardCommentWrite.styles";

export default function CommentPageUi(props) {
  return (
    <S.Container>
    <form onSubmit={props.handleSubmit(props.onClickSub)}>
      <S.Wrapper>
        <S.HearderWrapper>
        {!props.isEdit && (
          <>
          <S.PencilIcon src="/rate.png" />
          <span>댓글</span>
          </>
        )}
        {props.isEdit && (
          <span></span>
        )}

        </S.HearderWrapper>
        <S.InputWrapper>

          <S.Input
            type="text"
            placeholder="작성자"
            {...props.register("writer")}
          />
          <div>{props.formState.errors.writer?.message}</div>



          <S.Input
            type="password"
            placeholder="비밀번호"
            {...props.register("password")}
          />
          <div>{props.formState.errors.password?.message}</div>
          <S.Star 
          allowHalf 
          defaultValue={2.5} 
          onChange={props.onChangeStar}
          />
        </S.InputWrapper>
        <S.ContentsWrapper>

          <S.Contents
            maxLength={100}
            {...props.register("contents")}

            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."

          />
          <div>{props.formState.errors.contents?.message}</div>

          <S.BottomWrapper>
            <S.ContentsLength>/100</S.ContentsLength>
            <S.SubmitBtn>
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.SubmitBtn>
          </S.BottomWrapper>
          

        </S.ContentsWrapper>
      </S.Wrapper>
    
    </form>
    </S.Container>
  );
}
