import * as yup from 'yup'




export const schema = yup.object({
  id : yup.string().required("아이디를 입력하세요"),
  password : yup.string().required("숫자를 입력하세요")
                          .min(5,"5자 이상 입력하세요")
                          .max(8,"8자까지만 쓰세요"),
})



