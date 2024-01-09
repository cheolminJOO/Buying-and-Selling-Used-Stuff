import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper, SliderItem } from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const Images = [
    {url : "/son5.jpg"},
    {url : "/son2.jpg"},
    {url : "/son3.jpg"},
    {url : "/son4.jpg"},
    {url : "/son5.jpg"},
    {url : "/son1.jpg"},
  ]
  return (
    <Wrapper>
    <Slider
          {...settings}
    >
      {Images.map((el) => (
      
        <div>
          <SliderItem src={el.url}/>
        </div>

      
      ))}
    </Slider>
  </Wrapper>
);
}

