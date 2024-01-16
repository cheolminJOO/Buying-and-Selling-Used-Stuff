import * as S from "./TestPage.styles"
import Uploads01 from '../../../commons/uploads/01/Uploads01.container'
import dynamic from "next/dynamic"

const ReactQuill = dynamic(async() => await import("react-quill"), { ssr: false})

export default function TestPageUi (props) {


    const onChangeContents = (value) : void => {
    console.log(value)
    props.setValue("contents", value=== "<p><br></p>" ? "" : value);

    props.trigger("contents")
  }

  return (
    <form onSubmit = {props.isEdit? props.handleSubmit(props.onClickEdit) : props.handleSubmit(props.onClickFinalSubmit)}>
      {props.isOpen && (
        <S.AddressModal 
        onOk={props.handleok} 
        onCancel={props.handlecancel} 
        visible={true}>
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
          {...props.register("writer")} 
          placeholder="이름을 적어주세요."
          />
          <S.Error>{props.formState.errors.writer?.message}</S.Error> 
        </S.Group>
        <S.Group>
          <S.Writer>비밀번호</S.Writer>
          <S.InputNamePw 
          type="password" 
          {...props.register("password")} 
          placeholder="비밀번호를 입력해주세요"/>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
        </S.Group>
      </S.BigGroup>
      <S.TitleBox>
          <S.Writer>제목</S.Writer>
          <S.TitleInput 
          type='text' 
          {...props.register("title")} 
          placeholder="제목을 입력해주세요"/>
          <S.Error>{props.formState.errors.title?.message}</S.Error>
      </S.TitleBox>
      <S.ContentsBox>
          <S.Writer>내용</S.Writer>
          <ReactQuill onChange={onChangeContents}/>
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
        {...props.register("addressDetail")}
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
      <S.Btn type="submit" style={{backgroundColor : props?.formState?.isValid ? "yellow" : ""}}>{props.isEdit ? "수정하기" : "등록하기"}</S.Btn>
  </S.Box>
  <input 
  ref={props.aaa} 
  style={{display:"none"}}
  type="file" 
  accept="image/jpg"
  onChange = {props.onChangeFile}/>

  </form>
  )
}
