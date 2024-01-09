import {atom, selector, useRecoilState} from "recoil"
import { getAccessToken } from "../libraries/getAccessToken";
import { useMoveToPage } from "../../componets/commons/hooks/customs/useMoveToPage";

export const isEditState = atom({
  key: "isEditState",
  default: false

});

export const accessTokenState = atom({
  key: "accessTokenState",
  default : ""

})

export const writers = atom({

  key : "writer",
  default : ""
})

export const contentss = atom ({
  key : "contents",
  default : ""
})

export const restoreAccessTokenLoadable = selector({
  key : "restoreAccessTokenLoadable",
  get : async () => {
    const newAccessToken = await getAccessToken();

    return newAccessToken;
  }
})

export const visitedPageState = atom({
  key : "visitedPageState",
  default : ""
})


