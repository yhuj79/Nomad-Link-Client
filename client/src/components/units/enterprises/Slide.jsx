import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { Section, Box, Img, Title, HashTag, MsLoading } from "./Slide.style";
import SlideSample1 from "assets/SlideSample1.jpg";
import SlideSample2 from "assets/SlideSample2.jpg";
import SlideSample3 from "assets/SlideSample3.jpg";

// 개인 서비스 메인의 기업 슬라이드 컴포넌트
function Slide() {
  // react-slick Method
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  // Slide 왼쪽 화살표 style
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, zoom: "1.5", marginLeft: "30px", zIndex: "100" }}
        onClick={onClick}
      />
    );
  }
  // Slide 오른쪽 화살표 style
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, zoom: "1.5", marginRight: "30px", zIndex: "100" }}
        onClick={onClick}
      />
    );
  }

  const navigate = useNavigate();
  const [ent, setEnt] = useState([]);

  // 슬라이드에 실을 기업 데이터 요청
  useEffect(() => {
    const url = `/api/private/employ/enterprises`;
    axios
      .get(url)
      .then((response) => setEnt(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Section>
      {ent[0] ? (
        <Slider {...settings}>
          <Box onClick={() => navigate(`/notice/${ent[0].id}`)}>
            <Img src={SlideSample1} alt="" />
            <Title>
              <h1>{ent[0].enterpriseName}</h1>
              <h1>{ent[0].title}</h1>
              <HashTag>
                <span>#{ent[0].techStacks[0].techName}&emsp;</span>
                <span>#{ent[0].techStacks[1].techName}&emsp;</span>
                <span>#{ent[0].techStacks[2].techName}&emsp;</span>
              </HashTag>
            </Title>
          </Box>
          <Box onClick={() => navigate(`/notice/${ent[1].id}`)}>
            <Img src={SlideSample2} alt="" />
            <Title>
              <h1>{ent[1].enterpriseName}</h1>
              <h1>{ent[1].title}</h1>
              <HashTag>
                <span>#{ent[1].techStacks[0].techName}&emsp;</span>
                <span>#{ent[1].techStacks[1].techName}&emsp;</span>
                <span>#{ent[1].techStacks[2].techName}&emsp;</span>
              </HashTag>
            </Title>
          </Box>
          <Box onClick={() => navigate(`/notice/${ent[2].id}`)}>
            <Img src={SlideSample3} alt="" />
            <Title>
              <h1>{ent[2].enterpriseName}</h1>
              <h1>{ent[2].title}</h1>
              <HashTag>
                <span>#{ent[2].techStacks[0].techName}&emsp;</span>
                <span>#{ent[2].techStacks[1].techName}&emsp;</span>
                <span>#{ent[2].techStacks[2].techName}&emsp;</span>
              </HashTag>
            </Title>
          </Box>
        </Slider>
      ) : (
        <MsLoading>Loading...</MsLoading>
      )}
    </Section>
  );
}
export default Slide;
