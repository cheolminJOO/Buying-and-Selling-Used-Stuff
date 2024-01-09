// src/components/commons/hooks/useAuth.tsx
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { accessTokenState, restoreAccessTokenLoadable } from '../../store'

export function useAuth(){
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
	const router = useRouter()
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable)
	// useEffect 훅스를 사용하고 있기 때문에 커스텀 훅스입니다.
	useEffect(()=>{
    aaa.toPromise().then((newAccessToken) => {
      if(newAccessToken === undefined) {
       alert("로그인 후 이용 가능합니다 !!")
       router.push('/login')
      }
    })

      
	},[])
}