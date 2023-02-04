import { MainWide } from "styles/Pages";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Slide from "components/units/enterprises/Slide";
import List from "components/units/enterprises/List";
import HelmetAsync from "hooks/HelmetAsync";
import ContentHeader from "components/commons/ContentHeader";
import BannerSlim from "components/commons/BannerSlim";

// 개인 서비스 메인 페이지
function Private() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [data, setData] = useState(false);

  // 이력서 데이터 요청
  // "아직 이력서 작성은 안하셨나요?" 배너의 경우 이미 이력서를 작성했을 경우 나오지 않음
  useEffect(() => {
    const url = `/api/mypage/resume/get/${cookies.id}`;
    axios
      .get(url)
      .then((response) => setData(true))
      .catch((error) => {
        setData(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainWide
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"개인 서비스 : "} />
      {!data ? (
        <BannerSlim
          bgColor={"#FFFF8F"}
          lineOne={"아직 이력서 작성은 안하셨나요?"}
          button={">> 이력서 작성하기"}
          link={"mypage/resume/save"}
        />
      ) : null}
      <Slide />
      <ContentHeader
        title="현재 채용중인 기업"
        link={"/private/employ/enterprises"}
        linkName={"전체보기"}
      />
      <div style={{ marginTop: "-20px" }}>
        <List endPoint={"part"} />
      </div>
    </MainWide>
  );
}

export default Private;
