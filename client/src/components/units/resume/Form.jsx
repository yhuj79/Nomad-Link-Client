import { useState, useEffect } from "react";
import { useStateValue } from "store/StateProvider";
import axios, { post } from "axios";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { ButtonInput } from "styles/Button";
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
  ErrDiv,
  Error,
} from "styles/Form";

// 이력서 폼 컴포넌트
// props로 받은 type이 save인 경우 input이 비어있고, update인 경우 input에 기존 이력서 값이 부여됨
function Form({ type, title, url }) {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [userResume, setUserResume] = useState([]);
  const [updateStack, SetUpdateStack] = useState(false);

    // react-hook-form Method
  // register: form의 value 이름 설정, required와 pattern 등의 조건 부여 가능
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // 나이 옵션을 반복문으로 출력
  function SelectAge() {
    var arr = [];
    for (var i = 15; i <= 70; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  }

  // type = update인 경우 요청할 이력서 데이터
  useEffect(() => {
    const url = `/api/mypage/resume/get/${cookies.id}`;
    axios
      .get(url)
      .then((response) => setUserResume(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // form submit 시 실행
  const onSubmit = (data) => {
    const techStacks = initialState.techStack;
    const ResumeRequestDto = {
      realName: data.realName,
      age: data.age,
      phoneNumber: data.phoneNumber,
      email: data.email,
      gender: data.gender,
      blogUrl: data.blogUrl,
      portfolioUrl: data.portfolioUrl,
      githubUrl: data.githubUrl,
      role: data.role,
      nation: data.nation,
      employeeType: data.employeeType,
      techStacks: techStacks,
      developerIntroduction: data.developerIntroduction,
    };
    formData(ResumeRequestDto);
    window.location.replace("/mypage/resume");
  };

  // 이력서 폼 전송 함수
  async function formData(data) {
    try {
      const response = await post(url, data); // eslint-disable-line no-unused-vars
    } catch (error) {
      console.error(error);
    }
  }

  // 기술 스택을 담아두는 함수
  useEffect(() => {
    dispatch({ type: `DelStackAll` });
    for (let index in userResume.techStacks) {
      dispatch({
        type: `SaveStack`,
        item: userResume.techStacks[index].techName,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateStack]);

  setTimeout(function () {
    SetUpdateStack(true);
  }, 100);

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: "400px", textAlign: "left", marginLeft: "20px" }}>
          <Title style={{ paddingTop: "30px" }}>{cookies.id} 님</Title>
        </div>
        <BoxBlock>
          <BoxFlex>
            <BoxSelect>
              <Label>국가</Label>
              <Select
                {...(type === "update"
                  ? { ...setValue("nation", userResume.nation) }
                  : null)}
                {...register("nation", { required: true })}
              >
                <option value="">-- 전체 국가 --</option>
                <option value="INDIA">인도</option>
                <option value="CHINA">중국</option>
                <option value="VIETNAM">베트남</option>
                <option value="PHILIPPINE">필리핀</option>
              </Select>
              <ErrDiv style={{ marginTop: "10px" }}>
                {errors.nation && <Error>국가를 입력해 주세요.</Error>}
              </ErrDiv>
            </BoxSelect>
            <BoxSelect>
              <Label>분야</Label>
              <Select
                {...(type === "update"
                  ? { ...setValue("role", userResume.role) }
                  : null)}
                {...register("role", { required: true })}
              >
                <option value="">-- 전체 분야 --</option>
                <option value="SERVER">서버</option>
                <option value="FRONTEND">프론트엔드</option>
                <option value="ANDROID">안드로이드</option>
                <option value="IOS">IOS</option>
                <option value="AI">AI</option>
              </Select>
              <ErrDiv style={{ marginTop: "10px" }}>
                {errors.role?.type === "required" && (
                  <Error>분야를 입력해 주세요.</Error>
                )}
              </ErrDiv>
            </BoxSelect>
            <BoxSelect>
              <Label>유형</Label>
              <Select
                {...(type === "update"
                  ? { ...setValue("employeeType", userResume.employeeType) }
                  : null)}
                {...register("employeeType", { required: true })}
              >
                <option value="">-- 전체 유형 --</option>
                <option value="FULLTIME">정규직</option>
                <option value="PARTTIME">계약직</option>
                <option value="FREELANCER">프리랜서</option>
              </Select>
              <ErrDiv style={{ marginTop: "10px" }}>
                {errors.employeeType?.type === "required" && (
                  <Error>유형을 입력해 주세요.</Error>
                )}
              </ErrDiv>
            </BoxSelect>
            <BoxSelect>
              <Label>나이</Label>
              <Select
                {...(type === "update"
                  ? { ...setValue("age", userResume.age) }
                  : null)}
                {...register("age", { required: true })}
              >
                <option value="">-- 전체 나이 --</option>
                {SelectAge()}
              </Select>
              <ErrDiv style={{ marginTop: "10px" }}>
                {errors.age?.type === "required" && (
                  <Error>나이를 입력해 주세요.</Error>
                )}
              </ErrDiv>
            </BoxSelect>
            <BoxSelect>
              <Label>성별</Label>
              <Select
                {...(type === "update"
                  ? { ...setValue("gender", userResume.gender) }
                  : null)}
                {...register("gender", { required: true })}
              >
                <option value="">-- 전체 성별 --</option>
                <option value="MALE">남자</option>
                <option value="FEMALE">여자</option>
              </Select>
              <ErrDiv style={{ marginTop: "10px" }}>
                {errors.gender?.type === "required" && (
                  <Error>성별을 입력해 주세요.</Error>
                )}
              </ErrDiv>
            </BoxSelect>
          </BoxFlex>
        </BoxBlock>
        <BoxFlex>
          <InputDiv>
            <Label>이름</Label>
            <InputS
              placeholder="ex) 홍길동"
              style={
                errors.realName ? { borderBottom: "2px solid #ff0000" } : {}
              }
              {...(type === "update"
                ? { ...setValue("realName", userResume.realName) }
                : null)}
              {...register("realName", { required: true })}
            />
            {errors.realName && <Error>이름을 입력해 주세요.</Error>}
          </InputDiv>
          <InputDiv>
            <Label>연락처</Label>
            <InputS
              placeholder="ex) 010-1234-5678"
              style={
                errors.phoneNumber ? { borderBottom: "2px solid #ff0000" } : {}
              }
              {...(type === "update"
                ? { ...setValue("phoneNumber", userResume.phoneNumber) }
                : null)}
              {...register("phoneNumber", {
                required: true,
                pattern: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
              })}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
              <Error>연락처를 작성해 주세요.</Error>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
              <Error>연락처 형식에 맞게 작성해 주세요. (지역번호 X)</Error>
            )}
          </InputDiv>
        </BoxFlex>
        <BoxFlex>
          <InputDiv>
            <Label>이메일</Label>
            <InputS
              placeholder="ex) qwer1234@abc.com"
              style={errors.email ? { borderBottom: "2px solid #ff0000" } : {}}
              {...(type === "update"
                ? { ...setValue("email", userResume.email) }
                : null)}
              {...register("email", {
                required: true,
                pattern:
                  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <Error>이메일을 작성해 주세요.</Error>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <Error>이메일 형식에 맞게 작성해 주세요.</Error>
            )}
          </InputDiv>
          <InputDiv>
            <Label>GitHub 링크</Label>
            <InputS
              placeholder="ex) https://github.com/xxxx"
              style={
                errors.githubUrl ? { borderBottom: "2px solid #ff0000" } : {}
              }
              {...(type === "update"
                ? { ...setValue("githubUrl", userResume.githubUrl) }
                : null)}
              {...register("githubUrl", { required: true })}
            />
            {errors.githubUrl && <Error>링크를 입력해 주세요.</Error>}
          </InputDiv>
        </BoxFlex>
        <BoxFlex>
          <InputDiv>
            <Label>Blog 링크</Label>
            <InputS
              placeholder="ex) https://velog.io/@xxxx"
              style={
                errors.blogUrl ? { borderBottom: "2px solid #ff0000" } : {}
              }
              {...(type === "update"
                ? { ...setValue("blogUrl", userResume.blogUrl) }
                : null)}
              {...register("blogUrl", { required: true })}
            />
            {errors.blogUrl && <Error>링크를 입력해 주세요.</Error>}
          </InputDiv>
          <InputDiv>
            <Label>포트폴리오 링크</Label>
            <InputS
              placeholder="ex) https://www.notion.so/ko-kr/xxxx"
              style={
                errors.portfolioUrl ? { borderBottom: "2px solid #ff0000" } : {}
              }
              {...(type === "update"
                ? { ...setValue("portfolioUrl", userResume.portfolioUrl) }
                : null)}
              {...register("portfolioUrl", { required: true })}
            />
            {errors.portfolioUrl && <Error>링크를 입력해 주세요.</Error>}
          </InputDiv>
        </BoxFlex>
        <BoxBlock>
          <Label>자기 소개</Label>
          <InputL
            placeholder="내용을 입력하세요."
            style={
              errors.developerIntroduction
                ? { borderBottom: "2px solid #ff0000" }
                : {}
            }
            {...(type === "update"
              ? {
                  ...setValue(
                    "developerIntroduction",
                    userResume.developerIntroduction
                  ),
                }
              : null)}
            {...register("developerIntroduction", { required: true })}
          />
          {errors.developerIntroduction && <Error>내용을 입력하세요.</Error>}
        </BoxBlock>
        <ButtonInput type="submit" />
      </form>
    </Section>
  );
}

export default Form;
