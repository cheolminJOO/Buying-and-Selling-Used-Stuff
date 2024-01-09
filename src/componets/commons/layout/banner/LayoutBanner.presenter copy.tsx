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
    {url : "/2.jpg"},
    {url : "/1.jpg"},
    {url : "/3.jpg"},
    {url : "/4.jpg"},
    {url : "/5.jpg"},
    {url : "/6.jpg"},
  ]
  return (
    <Wrapper>
    <Slider
        dots={settings.dots}
        infinite = {settings.infinite}
        speed = {settings.speed}
        slidesToShow = {settings.slidesToScroll}
        slidesToScroll={settings.slidesToScroll}
    
    >
      {Images.map((el) => (
      <>
        <div>
          <SliderItem src={el.url}/>
        </div>

      </>
      ))}
    </Slider>
  </Wrapper>
);
}

