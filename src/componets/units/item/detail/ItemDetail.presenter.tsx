import { getDate } from '../../../../commons/utills/utill'
import * as S from './ItemDetail.styles'

export default function ItemPageUI (props) {

  return (
  <S.BigBigWrapper>
    <S.BigWrapper>
      <S.HeaderWrapper>
        <S.PersonalInf>
          <img src="/avatar.png"/>
          <S.WriterAndDate>
            <S.Writer>
              판매자
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
              {props.data?.fetchUseditem?.name}
    
            </S.ProductName>
            <S.Price>
            {props.data?.fetchUseditem?.price}
            </S.Price>
          </S.BodyHeaderText>
          <S.HeartImg>

          </S.HeartImg>

        </S.BodyHeader>
       
        <S.ModelImg>

        </S.ModelImg>
        <S.Contents>
          {props.data?.fetchUseditem?.contents}
        </S.Contents>
        <S.Tag>

        </S.Tag>
      </S.BodyWrapper>
      <S.Line/>
      {props.data?.fetchUseditem?.images
      ?.filter((el) => el)
      .map((el)=> (
      <S.ImgTag
      key={el}
      src={`http://storage.googleapis.com/${el}`}
      />
      ))}
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