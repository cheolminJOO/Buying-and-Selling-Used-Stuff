import{ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, gql, fromPromise} from '@apollo/client'
import{createUploadLink} from 'apollo-upload-client'
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { accessTokenState, restoreAccessTokenLoadable } from '../../../commons/store';
import { GraphQLClient } from 'graphql-request';
import {onError} from "@apollo/client/link/error"
import { getAccessToken } from '../../../commons/libraries/getAccessToken';
import { useEffect } from 'react';

interface IApolloSettingProps {
  children : JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache()

export default function ApolloSetting (props : IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable)
  useEffect(()=> {
    aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, []);



  const errorLink = onError(({ graphQLErrors, operation, forward })=>{
		if(typeof graphQLErrors !== "undefined"){
			for(const err of graphQLErrors){
				 if (err.extensions.code === "UNAUTHENTICATED") {
					return fromPromise(
						getAccessToken().then((newAccessToken) => {
							setAccessToken(newAccessToken);
	
							if(typeof newAccessToken !== "string") return
						operation.setContext({
										headers: {
											...operation.getContext().headers,
											Authorization: `Bearer ${newAccessToken}`, // accessToken만 새걸로 바꿔치기
										},
									});
						})
					).flatMap(() => forward(operation))
        }
			}
		}
	})
	



  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: {Authorization: `Bearer ${accessToken}` },
		credentials: "include",
  })
  const client = new ApolloClient({
    link: ApolloLink.from([ errorLink, uploadLink as unknown as ApolloLink]),
    cache : GLOBAL_STATE,
  });

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}