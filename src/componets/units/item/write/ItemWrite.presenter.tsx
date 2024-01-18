import Head from 'next/head'
import PhotoUpload from '../photo/ItemPhoto.container'
import * as S from './ItemWrite.styles'
export default function ItemWriteUI (props) {
  return (
    <form onSubmit= {props.isEdit? props.handleSubmit(props.onClickUpdate) : props.handleSubmit(props.onUseHook) }>
<Head>
        <script type="text/javascript" 
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=18260005708de9c19fe96a4dff026f6c&libraries=services">
        </script>
      </Head>
       <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9e75b440966d71f4c024a68eb9a43103"></script>
    <S.BigWrapper>
      <S.Wrapper>
        <S.Title>
          {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
        </S.Title>
        <S.InputWrapper>
          <S.InputName>
            상품명
          </S.InputName>
          <S.InputBox 
          type='text'
          {...props.register('name')}
          defaultValue={props.data?.fetchUseditem?.name}
          placeholder='상품명을 작성해주세요'/>
          <S.FormState>{props.isEdit ? "":props.formState.errors.name?.message}</S.FormState>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputName>
            한줄요약
          </S.InputName>
          <S.InputBox 
          type='text'
          {...props.register('summary')}
          defaultValue={props.data?.fetchUseditem?.remarks}
          placeholder='상품명을 작성해주세요'/>
          <S.FormState>{props.isEdit ? "":props.formState.errors.summary?.message}</S.FormState>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputName>
            상품설명
          </S.InputName>
          <S.TextArea 
          {...props.register('desc')}
          defaultValue={props.data?.fetchUseditem?.contents}
          placeholder='상품을 설명해주세요.'>
          {/* <S.FormState>{props.isEdit ? "":props.formState.errors.desc?.message}</S.FormState> */}
            
          </S.TextArea>

        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputName>
            판매가격
          </S.InputName>
          <S.InputBox 
          {...props.register('price')}
          defaultValue={props.data?.fetchUseditem?.price}
          type='text'
          placeholder='판매가격을 입력해주세요'/>
           <S.FormState>{props.isEdit ? "":props.formState.errors.price?.message}</S.FormState>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputName>
            태그입력
          </S.InputName>
          <S.InputBox 
          {...props.register('tag')}
          placeholder='#태그 #태그 #태그'/>
          <S.FormState>{props.isEdit ? "":props.formState.errors.tag?.message}</S.FormState>
        </S.InputWrapper>
        <S.WrapperContents>
          <S.MapBigWrapper>
            <S.MapWrapper id = "map">
              <S.InputName>
                거래위치
              </S.InputName>
            </S.MapWrapper>
            <S.GpsWrapper>
              <S.SearchWrapper>
              <S.InputName>
                검색
              </S.InputName>
              <S.LATLNGWrapper>
              <S.SearchInput id='keyword' type='text' onChange={props.onChangekeyWord}/>
              </S.LATLNGWrapper>
              </S.SearchWrapper>
              <S.AddressWrapper>
                <S.InputName>
                  주소
                </S.InputName>
                <S.AddressInputBox{
                  ...props.register('address')
                }>
                </S.AddressInputBox>
              </S.AddressWrapper>
            </S.GpsWrapper>
          </S.MapBigWrapper>
          <S.PhotoWrapper>
            <S.InputName>
              사진 첨부
            </S.InputName>
            <S.PhotoBoxWrapper>
              {props.fileUrls.map((el, index) =>(
                <PhotoUpload
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}/>
              ))}
            </S.PhotoBoxWrapper>
          </S.PhotoWrapper>
          <S.MainSetting>
            <S.InputName>
              메인 사진 설정
            </S.InputName>
            <S.FirstRadioBtn>
            </S.FirstRadioBtn>
            <S.SecondRadioBtn>
            </S.SecondRadioBtn>
          </S.MainSetting>
        </S.WrapperContents>
        <S.SubMitBtn
        type='submit'>
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubMitBtn>
      </S.Wrapper>
    </S.BigWrapper>
    </form>
  )
}