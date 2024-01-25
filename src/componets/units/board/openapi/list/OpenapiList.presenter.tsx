import { BigWrapper, ImgWrapper, Wrapper } from "./OpenapiList.styles";

export default function OpenapiListUi(props) {
  
  return (
    <BigWrapper>
      <Wrapper>
        {props.imgUrls.map((el) => (
          <ImgWrapper key={el} src={el}/>

        ))}
      </Wrapper>
    </BigWrapper>
  )
}