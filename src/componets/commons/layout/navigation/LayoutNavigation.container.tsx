import { useRouter } from "next/router";
import LayoutNavigationUi from "./LayoutNavigation.presenter";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";


export default function LayoutNavigation () {

  const {onClickMoveToPage} = useMoveToPage();

  return (
    <LayoutNavigationUi
    onClickMoveToPage={onClickMoveToPage}
    
    
    />
  )
}


