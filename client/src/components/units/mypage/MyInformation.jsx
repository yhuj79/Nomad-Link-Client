import { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "./MyInformation.style";
import ApplyProfile from "./ApplyProfile";
import TitleSection from "components/commons/TitleSection";
import { Button } from "styles/Button";

// 마이페이지 지원 내역 기업 리스트 컴포넌트
function MyInformation() {
  const [data, setData] = useState([]);

  // 지원한 기업 데이터 요청
  useEffect(() => {
    const url = `/api/member/mypage`;
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data?.length) {
    return (
      <Section>
        <TitleSection
          padding={"30px"}
          mediumOne={"지원하신 기업 내역입니다."}
          smallOne={
            "기업 공고를 통한 개발자 입사 신청은 검수 후 기업과 연결해 드리고 있습니다."
          }
          smallTwo={
            "지원 후 이력서를 수정해도 이미 지원한 이력서에는 반영되지 않습니다."
          }
        />
        {data.map((m, indexA) => {
          return (
            <ApplyProfile
              key={indexA}
              id={m.noticeId}
              enterpriseName={m.enterpriseName}
              title={m.noticeTitle}
              enterpriseLocation={m.enterpriseLocation}
            />
          );
        })}
      </Section>
    );
  } else {
    return (
      <Section>
        <TitleSection padding={"50px"} mediumOne={"지원 내역이 없습니다."} />
        <Button
          style={{ width: "250px" }}
          onClick={() => window.location.replace("/private/employ/enterprises")}
        >
          기업 리스트 보러가기
        </Button>
      </Section>
    );
  }
}

export default MyInformation;
