import styled from "@emotion/styled";


export const Category = styled.span`
`

export const Container = styled.div`
  display: flex;
  margin: 50px;
  cursor: pointer;
    &:hover {
    background-color: #5729ff;
    color: white;
  }

`

export const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: space-between;
`



export const Line = styled.div`
  border-bottom: 1px solid black;
`

export const PickedImg = styled.img`
  width: 50px;
  height: 50px;
`