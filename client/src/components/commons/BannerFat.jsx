import { useNavigate } from "react-router-dom";
import { Button } from "styles/Button";
import { Section, Div } from "./BannerFat.style";

// 메인 곳곳에서 사용되는 배너 넓은 버전
function BannerFat({
  bgColor,
  color,
  textAlign,
  height,
  lineOne,
  lineTwo,
  lineThree,
  lineFour,
  button,
  buttonName,
  link,
}) {
  const navigate = useNavigate();

  return (
    <Section bgColor={bgColor}>
      <Div style={{ textAlign: `${textAlign}` }} color={color} height={height}>
        <h1>{lineOne}</h1>
        <h1>{lineTwo}</h1>
        <h3>{lineThree}</h3>
        <h3>{lineFour}</h3>
        {button ? (
          <Button
            style={{ margin: "25px 0" }}
            onClick={() => navigate(`/${link}`)}
          >
            {buttonName}
          </Button>
        ) : null}
      </Div>
    </Section>
  );
}

export default BannerFat;
