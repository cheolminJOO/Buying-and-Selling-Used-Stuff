import { Fragment } from 'react';
import * as S from './LayoutNavigation.styles'

  const NAVIGATION_MENUS = [
    { name : "내 펫을 소개해", page : "/openapis"},
    { name : "잡단 게시판", page : "/boards"},
    { name : "중고마켓 게시판", page : "/item"},
    { name : "마이페이지", page : "/mypage"},
    { name : "장바구니", page : "/basket"}
  ]

  export default function LayoutNavigationUi (props) {

  return (
    <S.Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <S.FirstText id={el.page} onClick={props.onClickMoveToPage(el.page)}>
          {el.name}
          </S.FirstText>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}

