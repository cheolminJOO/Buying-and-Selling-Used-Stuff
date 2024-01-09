import { useState } from "react";
import Pagination01UI from "./Pagination01.presenter";

export default function Pagination01 (props) {

  const [start,setStart]= useState(1);

  const lastPage = Math.ceil(props.count/ 10);

  const [number, setNumber] = useState("")

  const onClickMoveToPrev = () => {
    if(start=== 1) return
    props.refetch({page : start - 10})
    setStart(start - 10)
  }
  const onClickMoveToNext = () => {
    if (start + 10 <= lastPage) {
      props.refetch({page : start + 10})
      setStart(start + 10)
    }


  }
  

  const onClickMoveToPage = (event) => {
    const aa = event.target.id
    props.refetch({page : Number(event.target.id)})
    setNumber(aa)
  }



  return (
    <Pagination01UI
    onClickMoveToPage={onClickMoveToPage}
    onClickMoveToNext={onClickMoveToNext}
    onClickMoveToPrev={onClickMoveToPrev}
    start={start}
    lastPage={lastPage}
    number ={number}
    />


  )
}