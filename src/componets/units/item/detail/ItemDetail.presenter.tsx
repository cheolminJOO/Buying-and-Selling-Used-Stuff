import { getDate } from '../../../../commons/utills/utill'
import * as S from './ItemDetail.styles'

export default function ItemPageUI (props) {

  return (
  <S.BigBigWrapper>
    <S.BigWrapper>
      <S.HeaderWrapper>
        <S.PersonalInf>
          <S.ProfileImg src={props.data?.fetchUseditem?.seller?.picture}/>
          <S.WriterAndDate>
            <S.Writer>
              {props.data?.fetchUseditem?.seller?.name}
            </S.Writer>
            <S.Date>
              {getDate(props.data?.fetchUseditem?.createdAt)}
            </S.Date>
          </S.WriterAndDate>
        </S.PersonalInf>
        <S.HeaderImg>
          <S.ClipImg src="/clip.png"/>
          <S.AddressImg src= "/address.png"/>
        </S.HeaderImg>
      </S.HeaderWrapper>
      <S.Line/>
      <S.BodyWrapper>
        <S.BodyHeader>
          <S.BodyHeaderText>
            <S.ShortDesc>
            </S.ShortDesc>
            <S.ProductName>
              상품명 :  {props.data?.fetchUseditem?.name}
    
            </S.ProductName>
            <S.ProductName>
            가격 : {props.data?.fetchUseditem?.price}
            </S.ProductName>
            <S.ProductName>
            한줄설명 : {props.data?.fetchUseditem?.remarks}
            </S.ProductName>
          </S.BodyHeaderText>
          <S.ProductName>
          내용 : {props.data?.fetchUseditem?.contents}
        </S.ProductName>
        <S.ProductName>
          만날 장소 : {props.data?.fetchUseditem?.useditemAddress?.address}
        </S.ProductName>

        </S.BodyHeader>
        
        <S.Tag>

        </S.Tag>
      </S.BodyWrapper>
      <S.Line/>
      <S.ProductName>
        상품사진
      </S.ProductName>
      <S.PictureWrapper>
      {props.data?.fetchUseditem?.images
      ?.filter((el) => el)
      .map((el)=> (
      <S.ImgTag
      key={el}
      src={`http://storage.googleapis.com/${el}`}
      />
      ))}
      </S.PictureWrapper>
      <S.Map>

      </S.Map>
      <S.Line/>
      <S.FooterWrapper>
        <S.FirstBtn onClick={props.onClickMoveToBoard}
        >
          목록으로

        </S.FirstBtn>
        <S.SecBtn
        onClick={props.onClickMoveToEdit}>
          수정하기
        </S.SecBtn>
      </S.FooterWrapper>
    </S.BigWrapper>
  </S.BigBigWrapper>

  )
}