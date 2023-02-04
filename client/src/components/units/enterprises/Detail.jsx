import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios, { post } from "axios";
import { Button } from "styles/Button";
import {
  Section,
  BoxFlex,
  DetailImage,
  Info,
  TechStackTitle,
  TechStackBox,
  TechName,
  EntName,
  EntTitle,
  EntTextDiv,
  Strong,
} from "./Detail.style";

// 기업 리스트 클릭 시 나오는 채용 공고 컴포넌트
function Detail() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [ent, setEnt] = useState([]);

  // 해당 기업의 정보 요청
  useEffect(() => {
    const url = `/api${window.location.pathname}`;
    axios
      .get(url)
      .then((response) => setEnt(response.data))
      .catch((error) => console.log(error));
  }, []);

  // 기업 지원 요청 함수
  async function PostApply() {
    const url = `/api${window.location.pathname}`;

    try {
      const response = await post(url); // eslint-disable-line no-unused-vars
    } catch (error) {
      console.error(error);
    }
  }

  // 지원하기 클릭 시 조건에 따라 지원 요청 처리
  function Apply() {
    if (cookies.id) {
      const conf = window.confirm(
        `${ent.enterpriseName} (${ent.title})\n 정말 지원하시겠습니까?`
      );
      if (conf === true) {
        PostApply();
        alert("지원이 완료되었습니다.\n마이페이지에서 조회 가능합니다.");
        window.location.replace("/private");
      } else {
        alert("취소 되었습니다.");
      }
    } else {
      alert("지원하시려면 로그인을 해주세요.");
      window.location.replace("/login");
    }
  }

  function EmployeeType() {
    if (ent.employeeType === "FULLTIME") {
      return "정규직";
    } else if (ent.employeeType === "PARTTIME") {
      return "계약직";
    } else if (ent.employeeType === "FREELANCER") {
      return "프리랜서";
    } else {
      return "-";
    }
  }
  function Annual() {
    if (ent.annual === "ZEROTOONE") {
      return "0-1년";
    } else if (ent.annual === "TWOTOFOUR") {
      return "2-4년";
    } else if (ent.annual === "FIVETOSEVEN") {
      return "5-7년";
    } else if (ent.annual === "EIGHTTOTEN") {
      return "8-10년";
    } else if (ent.annual === "MORETHANTEN") {
      return "10년 이상";
    } else {
      return "-";
    }
  }
  function Role() {
    if (ent.role === "SERVER") {
      return "서버";
    } else if (ent.role === "FRONTEND") {
      return "프론트엔드";
    } else if (ent.role === "ANDROID") {
      return "안드로이드";
    } else if (ent.role === "IOS") {
      return "IOS";
    } else if (ent.role === "AI") {
      return "AI";
    } else {
      return "-";
    }
  }

  // 기업 샘플 이미지 랜덤 생성
  const randNum = Math.floor(Math.random() * 15) + 1;

  return (
    <Section>
      <BoxFlex>
        <DetailImage
          alt=""
          src={require(`../../../assets/EnterpriseSample${randNum}.jpg`)}
        />
        <Info>
          <EntName>{ent.enterpriseName}</EntName>
          <EntTitle>{ent.title}</EntTitle>
          <BoxFlex>
            <EntTextDiv>
              <p>
                <Strong>[근무 지역]</Strong> {ent.enterpriseLocation}
              </p>
              <p>
                <Strong>[근무 유형]</Strong> {EmployeeType()}
              </p>
            </EntTextDiv>
            <EntTextDiv>
              <p>
                <Strong>[경력]</Strong> {Annual()}
              </p>
              <p>
                <Strong>[분야]</Strong> {Role()}
              </p>
            </EntTextDiv>
          </BoxFlex>
        </Info>
      </BoxFlex>
      <TechStackTitle>&#128736; 기술 스택</TechStackTitle>
      <TechStackBox>
        {ent.techStacks ? (
          ent.techStacks.map((p, indexB) => {
            return (
              <TechName key={indexB}>
                {p.techName.length > 11 ? (
                  <span style={{ fontSize: "10px" }}>{p.techName}</span>
                ) : (
                  <span style={{ fontSize: "13px" }}>{p.techName}</span>
                )}
              </TechName>
            );
          })
        ) : (
          <span>로딩에 실패했습니다. 잠시 후 다시 시도해 주세요.</span>
        )}
      </TechStackBox>
      <Button onClick={() => Apply()}>지원하기</Button>
    </Section>
  );
}

export default Detail;
