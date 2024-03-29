import styled from "@emotion/styled";
import {Rate} from "antd";
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 30px;
`;

export const Container = styled.div`
  width: 95vw;
  margin-top: 50px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const HearderWrapper = styled.div`
  display: flex;
`;

export const PencilIcon = styled.img`
  width : 30px;
  margin : 0 10px;
`;

export const Star = styled(Rate)`
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const SubmitBtn = styled.button`
width: 100px;
`

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
`;


