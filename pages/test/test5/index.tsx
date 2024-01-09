import { useState } from "react"

export default function PaginationTest () {
  const [start,setStart] = useState(1)
  const aaa = new Array(10).fill(0)

  const onCLickPrev = () => {
    setStart((prev) => prev - 10 > 0 ? prev - 10 : 1)
  }

  const onClickNext = () => {
    setStart((prev) => prev +10)
  }
  return(
    <div style ={{display : 'flex'}}>
    <span style={{cursor : 'pointer'}} onClick={onCLickPrev}>이전페이지</span>
    <div style={{width : "450px",display:"flex"}}>
    {new Array(10).fill(0).map((el,index) => 
    <div style={{marginLeft : "10px" , width : "35px"}}>{index + start}</div> )}
    </div>
    <span style={{cursor : 'pointer'}} onClick = {onClickNext}>다음페이지</span>
    </div>

  )
}