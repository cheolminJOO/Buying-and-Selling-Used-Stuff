import { useState } from "react";
import ItemWriteUI from "./ItemWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ItemWrite.queries";
import { useRouter } from "next/router";
import { IMutation, IMutationCreateUseditemArgs, IUpdateUseditemInput } from "../../../../types/generated/types";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";




export const aaa = yup.object({
  name: yup.string().required("상품명 입력 안 하고 뭐하냐고 !!!"),
  summary: yup.string().required("한줄요약 하라고 !!!!!"),
  desc:yup.string(),
  price: yup.string().required("뭐 기부할거야 ? 가격 써야지 ??"),
  tag: yup.string().required("홍보는 안 할거야 ??!!!!!!!!!!")
})


export default function ItemWrite (props) {
  const {register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver:yupResolver(aaa)

  })
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)
  const router = useRouter();
  const [createUsedItem] = useMutation<Pick<IMutation,"createUseditem">,IMutationCreateUseditemArgs>(CREATE_USED_ITEM)
  const [fileUrls, setFileUrls] = useState(["",""])

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }
  const onClickUpdate = async(data) => {
    if(!data.name && !data.summary && !data.price) {
      alert("바뀐 내용이 없습니다. 다시 시도해주세요")
    }

    console.log(data)

    const updateUseditemInput : IUpdateUseditemInput = {}
    if(data.name) updateUseditemInput.name =  data.name
    if(data.summary) updateUseditemInput.remarks = data.summary
    if(data.desc) updateUseditemInput.contents = data.desc
    if(Number(data.price)) updateUseditemInput.price = Number(data.price) 

  try {
    const result = await updateUseditem({
      variables: {
        updateUseditemInput,
        useditemId : router.query.boardId

      }
    })
    router.push(`/item/${result.data.updateUseditem._id}`)
  }catch(error) {
    if (error instanceof Error) alert(error.message)
  }
console.log(data)
}

  const onUseHook = async(data : any) => {
    if(!data.name){
      return
    }
    console.log(data)
    const result = await createUsedItem({
      variables : {
        createUseditemInput : {
          name : data.name,
          remarks : data.summary,
          contents : data.desc,
          tags : data.tag,
          price : Number(data.price),
          images : [...fileUrls],
          
        }
      }
    })
    
    router.push(`/item/${result.data.createUseditem._id}`)
  }

  return (
  <ItemWriteUI
  isEdit = {props.isEdit}
  data = {props.data}
  onClickUpdate={onClickUpdate}
  onChangeFileUrls={onChangeFileUrls}
  fileUrls={fileUrls}
  register={register}
  handleSubmit={handleSubmit}
  formState={formState}
  onUseHook={onUseHook}
  />
  )
}