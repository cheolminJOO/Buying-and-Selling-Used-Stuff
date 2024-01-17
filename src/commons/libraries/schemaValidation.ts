import { writers } from './../store/index';
import * as yup from 'yup'




export const schema = yup.object({
  writer : yup.string().required("아이디를 입력하세요"),
  password : yup.string().required("숫자를 입력하세요")
                          .min(5,"5자 이상 입력하세요")
                          .max(8,"8자까지만 쓰세요"),
  title : yup.string().required("제목을 쓰셔야 합니다."),
  contents : yup.string().required("내용을 입력하세요."),
  
})


export const commentSchema = yup.object({
  writer : yup.string().required("작성자를 입력하세요"),
  password : yup.string().required("비밀번호를 입력하세요요")

})



