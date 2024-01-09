import { useRouter } from "next/router"

import LayoutHeader from "./header/LayoutHeader.container"
import LayoutNavigation from "./navigation/LayoutNavigation.container"
import LayoutBanner from "./banner/LayoutBanner.container"

const HIDDEN_HEADERS = [
  "/test",
  
]

const HIDDEN_BANNER = [
  "/test",
]


interface ILayoutProps {
  children : JSX.Element
}

export default function Layout(props : ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)
  return (
    <>
      {!isHiddenHeader && <LayoutHeader/>}
      {!isHiddenBanner && <LayoutBanner/>}
      <LayoutNavigation/>
      <div style={{height : "1000px", display: "flex"}}>
        <div>{props.children}</div>
      </div>
    </>
  )
}