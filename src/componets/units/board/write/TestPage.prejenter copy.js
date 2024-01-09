import * as S from "./TestPage.styles"
import Uploads01 from '../../../../componets/commons/uploads/01/Uploads01.container'
export default function TestPageUi (props) {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
    <S.Box>
      <S.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Title>
      <S.BigGroup>
        <S.Group>
          <S.Writer>작성자</S.Writer>
          <S.InputNamePw 
          type='text' 
          onChange={props.onChangeWriter} 
          
          defaultValue={props.data?.fetchBoard.writer || ""}placeholder="이름을 적어주세요."
          />
          <S.Error>{props.formState.errors.writer?.message}</S.Error> 
        </S.Group>
        <S.Group>
          <S.Writer>비밀번호</S.Writer>
          <S.InputNamePw 
          type="password" 
          onChange={props.onChangePassword}
          defaultValue={props.data?.fetchBoard.password || ""}
          placeholder="비밀번호를 입력해주세요"/>
          <S.Error>{props.passwordError}</S.Error>
        </S.Group>
      </S.BigGroup>
      <S.TitleBox>
          <S.Writer>제목</S.Writer>
          <S.TitleInput 
          type='text' 
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title || ""}
          placeholder="제목을 입력해주세요"/>
          <S.Error>{props.formState.errors.title?.message}</S.Error>
      </S.TitleBox>
      <S.ContentsBox>
          <S.Writer>내용</S.Writer>
          <S.Contents 
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents || ""}
          placeholder="내용을 입력해주세요."/>
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
      </S.ContentsBox>
      <S.AddressBox>
        <S.Writer>주소</S.Writer>
        <S.MiniBox type='address' 
        placeholder='07250'
        readOnly
        value={
          props.zipcode ||
          props.data?.fetchBoard.boardAddress?.zipcode ||
          ""}
        />
        <S.MidBox onClick={props.onClickAddressSearch}>우편번호 검색</S.MidBox>
        <S.TitleInput 
        value={             
          props.address ||
          props.data?.fetchBoard.boardAddress?.address ||
          ""}
        />
        <S.TitleInput 
        onChange={props.onChangeAddressDetail} 
        defaultValue={
          props.data?.fetchBoard.boardAddress?.addressDetail || ""
        }
        type='text'/>
      </S.AddressBox>
      <S.TitleBox>
        <S.Writer>유투브</S.Writer>
        <S.TitleInput type='text' placeholder='링크를 복사해주세요' />
      </S.TitleBox>
      <S.PhotoBox>
        <S.Writer>사진 첨부</S.Writer>
        {props.fileUrls.map((el, index) => (
          <Uploads01
            index={index}
            fileUrl={el}
            onChangeFileUrls={props.onChangeFileUrls}
            />
        ))}
      </S.PhotoBox>
      <S.MainSetting>
        <S.Writer>메인 설정</S.Writer>
        <input type='radio'/>유투브
        <input type='radio'/>사진
      </S.MainSetting>
      <S.Btn 
          type="button"
          onClick={props.isEdit ? props.onClickFinalSubmit : props.onClickSubmit}
          isActive={props.isActive}
      
      >{props.isEdit ? "수정하기" : "등록하기"}</S.Btn>
  </S.Box>
  <input 
  ref={props.aaa} 
  style={{display:"none"}}
  type="file" 
  accept="image/jpg"
  onChange = {props.onChangeFile}/>

  </>
  )
}
