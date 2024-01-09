
import { Global } from '@emotion/react'
import Layout from '../src/componets/commons/layout'
import ApolloSetting from '../src/componets/commons/apollo'
import { globalStyles } from '../src/commons/styles/globalStyles'
import { RecoilRoot } from 'recoil'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component}) {

  return(
    <RecoilRoot>
    <ApolloSetting>
    <>
    <Global styles={globalStyles}/>
      <Layout>
        <Component />
      </Layout>
    </>
    </ApolloSetting>
    </RecoilRoot>
  )


  }

