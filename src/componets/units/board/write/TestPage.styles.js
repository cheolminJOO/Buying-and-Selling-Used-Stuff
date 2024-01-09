import styled from '@emotion/styled';
import { Modal } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';

export const Box = styled.div`
width: 1000px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  box-sizing : borer;
  
`
export const BodyBox = styled.div`
  width : 100%;
  height : 100%;

`

export const VideoBox = styled.div`
  width : 486px;
  height : 240px;
  background-color : lightgray;
  left : 716px;

`
export const Head = styled.div`
  margin-top : 100px;
  margin-bottom : 50px;
  font-size : 20px;
  font-weight : Bold;
`

export const BigGrayBox = styled.div`
  width : 996px;
  height : 480px;
  background-color : #F2F2F2;
`
export const Word = styled.div`
  margin-top : 50px;
  font-size : 16px;
  font-weight : 400;
  line-height : 23.68px;
  width:996px;
  height : 96px;
`

export const RoutedBox = styled.div`
width : 1200px;
height :1500px;
left : 717px;
box-sizing : border-box;
margin : 30px;
border : gray 2px solid;
padding : 100px;
display : flex;
flex-direction : column;

`

export const Title = styled.div`
font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`
export const BigGroup = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`
export const Group = styled.div`
  margin : 0 10px 0 0; 
  width : 486px;
  height : 92px;

`
export const TitleBox = styled.div`
  width : 996px;
  height : 92px;
  

`
export const ContentsBox = styled.div`
  width : 996px;
  height : 520px;
  margin-top : 30px;

`
export const Contents = styled.textarea`
width: 960px;
height: 480px;

padding: 14px;
border: 1px solid #bdbdbd;

`


export const TitleInput = styled.input`
  width : 980px;
  height : 52px;
  border : 1px solid gray;
  margin : 15px 0;
`
export const Writer = styled.div`
  font-size : 16px;
  font-weight : 600;

`

export const SubFont = styled.div`
  font-size : 10px;
  font-weight : 300;
  color : gray;
`

export const InputNamePw = styled.input`
width : 486px;
height : 52px;
  border : 1px solid gray;
`


export const EmailInput = styled.input`
  width: 200px;
`

export const Btn = styled.button`
  background-color: ${props => props.isActive ? "yellow" : "default"};
  border : none;
  font-size : 10px;
  width : 179px;
  height : 52px;
  left : 500px;
  font-size : 16px;
  font-weight : 500;
  cursor : pointer;
`

export const AddressBox = styled.div`
  width : 996px;
  height : 242px;
  margin-top : 50px;
  
`

export const MiniBox = styled.input`
  width : 77px;
  height : 52px;
  margin-right : 10px;
`

export const MidBox = styled.button`
  width : 124px;
  height : 52px;
`

export const PhotoBox = styled.div`
  width : 100%;
  height : 118px;

  align-items : start;
`

export const GrayBox = styled.div`
  width : 78px;
  height : 78px;
  background-color : gray;
  margin-right : 20px;
  font-size : 50px;
  text-align : center;
  cursor : pointer;
`
export const MainSetting = styled.div`
  width : 100%;
  height : 64px;

`
export const BoxBox = styled.div`
  width : 282px;
  height : 78px;
  display : flex;
  flex-direction : row;

`

export const Error = styled.div`
  color : red;
  font-size : 9px;
`

export const Line = styled.div`
  width : 100%;
  border-top : 1px gray solid;
`

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;