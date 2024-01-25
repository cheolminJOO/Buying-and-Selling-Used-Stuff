import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper, SliderItem } from "./LayoutBanner.styles";
import * as S from './LayoutBanner.styles'

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 500,
  };

  const Images = [
    {id : 1, url : "/motorcycle.png"},
    {id : 2, url : "/clothes.png"},
    {id : 3, url : "/kettle.png"},
    {id : 4, url : "/laptop.png"},
    {id : 5, url : "/shoes.png"},
    {id : 6, url : "/cap.png"},
  ]
  return (
    <S.Wrapper>
    <Slider
          {...settings}
    >
      {Images.map((el) => (
      
        <div key={el.id}>
          <S.SliderItem src={el.url} alt="엑박"/>
        </div>

      
      ))}
    </Slider>
  </S.Wrapper>
);
}

