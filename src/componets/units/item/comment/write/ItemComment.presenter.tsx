import * as S from "./ItemComment.styles"

export default function ItemCommentPageUI(props) {
  return (
    <S.BigWrapper>
      <S.Wrapper>
        {!props.isEdit && (
        <S.HeaderWrapper>
          <S.PencilImg src="/rate.png"/>
          <S.Title>
            문의하기
          </S.Title>
        </S.HeaderWrapper>
        )}
        {props.isEdit && (
          <span></span>
        )}
        <S.BodyWrapper>
          <S.ContentsInput 
          maxLength={100}
          onChange={props.onChangeContents}
          defaultValue={props.el?.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."/>
          <S.ContentsBottomWrapper>
            <S.ContentsLength>
            {props.contents.length}/100
            </S.ContentsLength>
            <S.CreateBtn onClick={props.isEdit ? props.onClickUpdateBtn : props.onClickComplteBtn}>
              {props.isEdit ?"수정하기" : "문의하기"}
            </S.CreateBtn>
          </S.ContentsBottomWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
    </S.BigWrapper>


  )
}