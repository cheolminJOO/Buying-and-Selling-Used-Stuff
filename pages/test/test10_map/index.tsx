import Head from 'next/head';
import { ChangeEvent, useEffect, useState } from 'react';

declare const window : typeof globalThis & {
  kakao: any;
} 

export default function MapTest () {

  const [keyWord,setKeyWord] = useState("")

  const onChangekeyWord = (event : ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value)
  }
  

  
  
  useEffect(() => {

    const script = document.createElement("script") 
    script.src =
     "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=18260005708de9c19fe96a4dff026f6c"
    document.head.appendChild(script)

 

    script.onload = () => {
      window.kakao.maps.load(function() {
        var mapContainer = document.getElementById('map'), 
        mapOption = { 
            center: new window.kakao.maps.LatLng(37.572371, 126.984445), 
            level: 3 
        };
    
        var map = new window.kakao.maps.Map(mapContainer, mapOption); 
        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
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



  console.log(keyWord)

  
  return(
    <>
          <Head>
        <script type="text/javascript" 
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=18260005708de9c19fe96a4dff026f6c&libraries=services">
        </script>
      </Head>

      {/* 지도 생성 및 객체 리턴 */}
      <input type='text' onChange={onChangekeyWord}/>
      <button>클릭하기</button>
       <div id='map' style={{ "width" : "500px", "height" : "400px" }}></div>
       
    </>
  )
}