import { useState, useEffect } from "react";
import axios, { post } from "axios";
import { useCookies } from "react-cookie";
import { useTheme } from "store/ThemeProvider";
import { useStateValue } from "store/StateProvider";
import TitleSection from "components/commons/TitleSection";
import { Button, ButtonMini } from "styles/Button";
import {
  Section,
  BoxFlex,
  BoxBlock,
  BoxSelect,
  InputDiv,
  Title,
  Label,
  InputS,
  InputL,
  Select,
} from "styles/Form";
import TechStack from "./TechStack";
import ContentHeader from "components/commons/ContentHeader";

// 이력서 확인 컴포넌트
function Check() {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [ThemeMode, toggleTheme] = useTheme(); // eslint-disable-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [userResume, setUserResume] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // 이력서 데이터 요청
  useEffect(() => {
    const url = `/api/mypage/resume/get/${cookies.id}`;
    axios
      .get(url)
      .then((response) => {
        setUserResume(response.data);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          // disabled 시 "등록된 이력서가 없습니다." 출력되게함
          setDisabled(true);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 기술 스택을 담는 함수 (나머지 값은 기존 값으로 전달됨)
  const onTechStack = () => {
    const techStacks = initialState.techStack;
    const ResumeRequestDto = {
      realName: userResume.realName,
      age: userResume.age,
      phoneNumber: userResume.phoneNumber,
      email: userResume.email,
      gender: userResume.gender,
      blogUrl: userResume.blogUrl,
      portfolioUrl: userResume.portfolioUrl,
      githubUrl: userResume.githubUrl,
      role: userResume.role,
      nation: userResume.nation,
      employeeType: userResume.employeeType,
      techStacks: techStacks,
      developerIntroduction: userResume.developerIntroduction,
    };
    formData(ResumeRequestDto);
    alert("저장되었습니다.");
  };

  // 기술 스택 데이터 전송 함수
  async function formData(data) {
    try {
      const response = await post( // eslint-disable-line no-unused-vars
        `/api/mypage/resume/update/${cookies.id}`,
        data
      );
    } catch (error) {
      console.error(error);
    }
  }

  function Gender() {
    if (userResume.gender === "MALE") {
      return "남자";
    } else if (userResume.gender === "FEMALE") {
      return "여자";
    } else {
      return "-";
    }
  }

  function Role() {
    if (userResume.role === "SERVER") {
      return "서버";
    } else if (userResume.role === "FRONTEND") {
      return "프론트엔드";
    } else if (userResume.role === "ANDROID") {
      return "안드로이드";
    } else if (userResume.role === "IOS") {
      return "IOS";
    } else if (userResume.role === "AI") {
      return "AI";
    } else {
      return "-";
    }
  }

  function EmployeeType() {
    if (userResume.employeeType === "FULLTIME") {
      return "정규직";
    } else if (userResume.employeeType === "PARTTIME") {
      return "계약직";
    } else if (userResume.employeeType === "FREELANCER") {
      return "프리랜서";
    } else {
      return "-";
    }
  }

  // 이력서 확인 페이지에서 input과 label의 디자인이 다르게끔 설정
  function bgColor() {
    if (ThemeMode === "dark") {
      return "#333333";
    } else {
      return "#E7E7E7";
    }
  }
  function color() {
    if (ThemeMode === "dark") {
      return "#FFF";
    } else {
      return "#000";
    }
  }
  const labelStyle = {
    fontWeight: "bold",
  };
  const inputStyle = {
    backgroundColor: bgColor(),
    color: color(),
    appearance: "none",
    borderRadius: "0",
    borderBottom: "2px solid #4641d9",
  };

  if (disabled) {
    return (
      <Section style={{ marginTop: "20px" }}>
        <TitleSection
          padding={"50px"}
          mediumOne={"등록된 이력서가 없습니다."}
          smallOne={"작성하신 이력서는 개발자 리스트에 업로드됩니다."}
        />
        <Button
          style={{ width: "200px" }}
          onClick={() => window.location.replace("/mypage/resume/save")}
        >
          이력서 작성하기
        </Button>
      </Section>
    );
  } else {
    return (
      <section>
        <Section style={{ marginTop: "20px" }}>
          <BoxFlex style={{ alignItems: "center" }}>
            <div
              style={{ width: "400px", textAlign: "left", marginLeft: "20px" }}
            >
              <Title style={{ paddingTop: "30px" }}>{cookies.id} 님</Title>
            </div>
            <div style={{ width: "485px", textAlign: "right" }}>
              <ButtonMini
                onClick={() => window.location.replace("/mypage/resume/update")}
              >
                수정
              </ButtonMini>
            </div>
          </BoxFlex>
          <BoxBlock>
            <BoxFlex>
              <BoxSelect>
                <Label style={labelStyle}>국가</Label>
                <Select style={inputStyle} disabled>
                  <option>{userResume.nation}</option>
                </Select>
              </BoxSelect>
              <BoxSelect>
                <Label style={labelStyle}>분야</Label>
                <Select style={inputStyle} disabled>
                  <option>{Role()}</option>
                </Select>
              </BoxSelect>
              <BoxSelect>
                <Label style={labelStyle}>유형</Label>
                <Select style={inputStyle} disabled>
                  <option>{EmployeeType()}</option>
                </Select>
              </BoxSelect>
              <BoxSelect>
                <Label style={labelStyle}>나이</Label>
                <Select style={inputStyle} disabled>
                  <option>{userResume.age}</option>
                </Select>
              </BoxSelect>
              <BoxSelect>
                <Label style={labelStyle}>성별</Label>
                <Select style={inputStyle} disabled>
                  <option>{Gender()}</option>
                </Select>
              </BoxSelect>
            </BoxFlex>
          </BoxBlock>
          <BoxFlex>
            <InputDiv>
              <Label style={labelStyle}>이름</Label>
              <InputS
                style={inputStyle}
                defaultValue={userResume.realName}
                readOnly
              />
            </InputDiv>
            <InputDiv>
              <Label style={labelStyle}>연락처</Label>
              <InputS
                style={inputStyle}
                defaultValue={userResume.phoneNumber}
                readOnly
              />
            </InputDiv>
          </BoxFlex>
          <BoxFlex>
            <InputDiv>
              <Label style={labelStyle}>이메일</Label>
              <InputS
                style={inputStyle}
                defaultValue={userResume.email}
                readOnly
              />
            </InputDiv>
            <InputDiv>
              <Label style={labelStyle}>GitHub 링크</Label>
              <InputS
                style={inputStyle}
                defaultValue={userResume.githubUrl}
                readOnly
              />
            </InputDiv>
          </BoxFlex>
          <BoxFlex>
            <InputDiv>
              <Label style={labelStyle}>Blog 링크</Label>
              <InputS
                style={inputStyle}
                defaultValue={userResume.blogUrl}
                readOnly
              />
            </InputDiv>
            <InputDiv>
              <Label style={labelStyle}>포트폴리오 링크</Label>
              <InputS
                style={inputStyle}
                defaultValue={userResume.portfolioUrl}
                readOnly
              />
            </InputDiv>
          </BoxFlex>
          <BoxBlock style={{ paddingBottom: "30px" }}>
            <Label style={labelStyle}>자기 소개</Label>
            <InputL
              style={inputStyle}
              defaultValue={userResume.developerIntroduction}
              readOnly
            />
          </BoxBlock>
        </Section>
        <ContentHeader title="기술 스택" button={false} />
        <Section style={{ height: "290px", marginTop: "0" }}>
          {userResume.techStacks ? (
            <TechStack uTech={userResume.techStacks} />
          ) : (
            <div>
              <TechStack uTech={userResume.techStacks} />
            </div>
          )}
          <div
            style={{ textAlign: "left", padding: "20px", marginTop: "-74px" }}
          >
            <ButtonMini onClick={() => onTechStack()}>저장</ButtonMini>
          </div>
        </Section>
      </section>
    );
  }
}
export default Check;
