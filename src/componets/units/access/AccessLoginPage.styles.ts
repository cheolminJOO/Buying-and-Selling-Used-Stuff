import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.span`

font-size: 40px;
margin-bottom: 50px;
`


export const Box = styled.div`
  width: 500px;
  height: 500px;
  border: 5px solid white;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  margin-bottom: 30px;
  width: 300px;
  height: 50px;


`

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`

export const LoginBtn = styled.button`
  margin-right: 20px;
  &:hover {
    background-color: #5729ff ;
    color: white;
  }
`

export const SignUpBtn = styled.button`

&:hover {
    background-color: #5729ff ;
    color: white;
  }


`

