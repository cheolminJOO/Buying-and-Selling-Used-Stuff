
import { getDate } from '/src/commons/utills/utill'
import * as S from './BoardDetail.styles'
import DOMPurify from 'dompurify'
import Tooltip from '../../../commons/hooks/tooltip/tooltip'
export default function BoardDetailUi (props) {

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
                <S.AddressInput
                type='text'
                value={props.data?.fetchBoard?.boardAddress?.address}
                />
                {props.data?.fetchBoard?.boardAddress.addressDetail && (
                <S.AddressDetailInput
                type='text'
                value={props.data?.fetchBoard?.boardAddress.addressDetail}
                />
                )}
                
                <S.Head
                style = {{color : "green"}}>
                  제목 : {props.data?.fetchBoard.title}
                </S.Head>

                
                {typeof window !== "undefined" && (
                <S.ContentsDiv>
                  <S.Word>내용 : </S.Word>
                  <S.Word
                style = {{color : "red"}}
                dangerouslySetInnerHTML ={{
                 __html : DOMPurify.sanitize(props.data?.fetchBoard?.contents)
                }}
                />
                </S.ContentsDiv>
                )}
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