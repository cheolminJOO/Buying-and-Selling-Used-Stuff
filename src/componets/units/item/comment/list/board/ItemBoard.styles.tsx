import styled from "@emotion/styled"

export const Wrapperwrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 1900px;
    height: 1000px;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export const HeaderWrapper = styled.div`

    display: flex;
    justify-content: end;
`

export const SearchInput = styled.input`
    width: 500px;
`


export const Row = styled.div`
    display : flex;
    flex-direction : row;
    border-top : 1px black solid;
    border-bottom : 1px black solid;
`

export const ColumnId = styled.div`
    width:25%;
    padding: 10px 0;
`

export const ColumnTitle = styled.div`
    width:25%;
    padding: 10px 0;
`

export const ColumnWriter = styled.div`
    width:25%;
    padding: 10px 0;
`

export const ColumnCreatedAt = styled.div`
    width:25%;
    padding: 10px 0;
`
export const Title = styled.div`
    display : flex;
    justify-content: center;

`

export const Tit = styled.div`
    width: 25%;
    border-top : 1px black solid;
    padding : 10px 0;
`

export const NewBtn = styled.button`
    width : 100px;

`

export const DetailedBtn = styled.button`
    width: 100px;
    height: 50px;
    margin-left: 10px;
    :hover {
        background-color: deepskyblue;
    }

`

export const GotoBasket = styled.button`
    width: 130px;
    &:hover {
        background-color: orange;
    }

`

export const DetailedBtnWidController = styled.div`
    
    width : 150px;
    height : 50px

`
