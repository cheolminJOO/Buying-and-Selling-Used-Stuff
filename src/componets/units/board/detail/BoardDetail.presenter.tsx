
import * as S from './BoardDetail.styles'
import DOMPurify from 'dompurify'
import { IBoardDetailUIProps } from './BoardDetail.types'
import { getDate } from '../../../../commons/utills/utill'
export default function BoardDetailUi (props : IBoardDetailUIProps) {

  return(
  
        <S.Container>
          <S.UltraBigBox>
            <S.RoutedBox>
              <div>
                <S.HeaderWrapper>
                  <S.WriterWrapper>
                    <S.Writer
                    style = {{color : "blue"}}>
                    {props.data?.fetchBoard.writer}
                    </S.Writer>
                    <S.SubFont>Date: {getDate(props.data?.fetchBoard.createdAt)}</S.SubFont>
                  </S.WriterWrapper>
                  <S.ImageWrapper>
                    <S.FirstImage src='/clip.png'/>
                    
                    <S.SecondImage 
                    src='/address.png' />
                    
                  </S.ImageWrapper>
                </S.HeaderWrapper>
                <S.Line></S.Line>
              </div>
              <S.BodyBox>
                <S.Head>
                  Address
                </S.Head>
                <S.AddressInput
                type='text'
                value={props.data?.fetchBoard?.boardAddress?.address}
                />
                {props.data?.fetchBoard?.boardAddress?.addressDetail && (
                <S.AddressDetailInput
                type='text'
                value={props.data?.fetchBoard?.boardAddress?.addressDetail}
                />
                )}
                
                <S.Head>
                  Title
                </S.Head>
                <S.AddressInput
                type='text'
                value={props.data?.fetchBoard.title}
                />
                {typeof window !== "undefined" && (
                <S.ContentsDiv>
                  <S.Head>Contents </S.Head>
                  <S.ContentsWord
                dangerouslySetInnerHTML ={{
                 __html : DOMPurify.sanitize(props.data?.fetchBoard?.contents)
                }}
                />
                </S.ContentsDiv>
                )}
                <S.Head>Photo </S.Head>
                <S.WrapperPhotoBox>
                {props.data?.fetchBoard.images?.filter((el) => el !== "")
                .map((el)=> (  
                    <S.PhotoBox
                    src={`https://storage.googleapis.com/${el}`}/>
                ))}
                </S.WrapperPhotoBox>
              </S.BodyBox>
              <S.EtcBox>
              </S.EtcBox>
            </S.RoutedBox>
          <S.BtnBox>
            <S.DetailedPageBtn onClick={props.onClickMoveToPage('/boards')}>목록으로</S.DetailedPageBtn>
            <S.DetailedPageBtn onClick={props.onClick}>수정하기</S.DetailedPageBtn>
            <S.DetailedPageBtn onClick={props.onClickMoveToPage('/boards')}>삭제하기</S.DetailedPageBtn>
          </S.BtnBox>
          </S.UltraBigBox>
          </S.Container>
      )

}