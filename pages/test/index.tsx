 import { yupResolver } from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import { schema } from '../../src/commons/libraries/schemaValidation';
import Test4 from './test4';

interface IData  {
  id : String
  password : String
  name : String
}

console.log("난 스키마" ,schema)

 
 export default function deStructureTest() {

    const {register,handleSubmit,formState} = useForm({
      mode: 'onChange',
      resolver : yupResolver(schema)
    })
    console.log("난 formState" , formState.isValid)

    const onSubmitForm = (data : IData) => {  
      console.log('난 데이터')
      
    }
    

    return(
      <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        id 입력 :<input type="text" {...register("id")} />
        <div>{formState.errors.id?.message}</div>
        password 입력 : <input minLength={5} maxLength={8}  type="password"  {...register("password")}/>
        <div>{formState.errors.password?.message}</div>
        <button style={{backgroundColor : formState.isValid ? "yellow" : ""}}type="submit">제출하기</button> 
      </form>
      <Test4
      onSubmitForm={onSubmitForm}/>
      </>
    )

  }



