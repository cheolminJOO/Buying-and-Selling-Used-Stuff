import TextArea from "antd/es/input/TextArea";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { contentss, writers } from "../../../src/commons/store";
import { useRouter } from "next/router";

import 'react-quill/dist/quill.snow.css';
import {useForm} from 'react-hook-form'

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {ssr:false});

export default function ReactQuillTest () {

  const {register} = useForm({
    mode : "onChange",
  })
  const [writer , setWriter] = useRecoilState(writers)
  const [contents, setContents] = useRecoilState(contentss)
  const router= useRouter()

  const onChangeWriter = (event : ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value)

  }

  const handleChange = (value : string) => {
    console.log(value)
  }

  const onClickBtn = () => {
    router.push('/test/test9')
  }


  return (
    <>

    작성자 : <input onChange={onChangeWriter} type="text" />
    내용 :<ReactQuill onChange={handleChange} />
    <button onClick={onClickBtn}>클릭하세요</button>
    </>
  )
}