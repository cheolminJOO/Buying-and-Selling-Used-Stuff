import { ChangeEvent, useEffect, useState } from "react";
import ItemWriteUI from "./ItemWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ItemWrite.queries";
import { useRouter } from "next/router";
import { IMutation, IMutationCreateUseditemArgs, IUpdateUseditemInput } from "../../../../types/generated/types";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";


declare const window : typeof globalThis & {
  kakao:any
};


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
  const [keyWord,setKeyWord] = useState("")
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)
  const router = useRouter();
  const [createUsedItem] = useMutation<Pick<IMutation,"createUseditem">,IMutationCreateUseditemArgs>(CREATE_USED_ITEM)
  const [fileUrls, setFileUrls] = useState(["",""])

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls]
    newFileUrls[index] = fileUrl
    setFileUrls(newFileUrls)
  }

  const onChangekeyWord = (event : ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value)
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
          useditemAddress :{
            address : data.address
          }
          
        }
      }
    })
    
    router.push(`/item/${result.data.createUseditem._id}`)
  }

  useEffect(() => {

    const script = document.createElement("script") 
    script.src =
     "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=18260005708de9c19fe96a4dff026f6c"
    document.head.appendChild(script)

 

    script.onload = () => {
      window.kakao.maps.load(function() {
        const mapContainer = document.getElementById('map'), 
        mapOption = { 
            center: new window.kakao.maps.LatLng(37.572371, 126.984445), 
            level: 3 
        };
    
        const map = new window.kakao.maps.Map(mapContainer, mapOption); 
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
        imageSize = new window.kakao.maps.Size(64, 69), 
        imageOption = {offset: new window.kakao.maps.Point(27, 69)}; 
        var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new window.kakao.maps.LatLng(37.572371, 126.984445); 
        var markerPosition  = new window.kakao.maps.LatLng(37.572371, 126.984445); 
        var infowindow = new window.kakao.maps.InfoWindow({zIndex:1});
        var ps = new window.kakao.maps.services.Places(); 

        ps.keywordSearch(keyWord, placesSearchCB); 
       
        function placesSearchCB (data, status, pagination) {
          if (status === window.kakao.maps.services.Status.OK) {
            
      
              // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
              // LatLngBounds 객체에 좌표를 추가합니다
              var bounds = new window.kakao.maps.LatLngBounds();
      
              for (var i=0; i<data.length; i++) {
                  displayMarker(data[i]);    
                  bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
              }       
 
      
              // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
              map.setBounds(bounds);
          } 
      }
      
      // 지도에 마커를 표시하는 함수입니다
      function displayMarker(place) {
          
          // 마커를 생성하고 지도에 표시합니다
          var marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(place.y, place.x) 
          });
      
          // 마커에 클릭이벤트를 등록합니다
          window.kakao.maps.event.addListener(marker, 'click', function() {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
              infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
              infowindow.open(map, marker);
          });
      }

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

      })

  }
  },[keyWord])


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
  onChangekeyWord={onChangekeyWord}
  />
  )
}