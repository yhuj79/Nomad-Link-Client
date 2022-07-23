import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

function RecruitForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [text, setText] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    setText(JSON.stringify(data));
    // setText(data.techStack);
  };

  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <Title>채용이 확정되기 전에는 어떠한 비용도 청구되지 않습니다.</Title>
      <div>
        <Flex>
          <InputDiv>
            <Label>회사명</Label>
            <InputS
              placeholder="ex) 노마드 링크"
              style={errors.nameCompany ? { border: "2px solid #ff0000" } : {}}
              {...register("nameCompany", { required: true })}
            />
            {errors.nameCompany && <Error>회사명을 입력해 주세요.</Error>}
          </InputDiv>
          <InputDiv>
            <Label>담당자 이름</Label>
            <InputS
              placeholder="ex) 홍길동"
              style={errors.namePic ? { border: "2px solid #ff0000" } : {}}
              {...register("namePic", { required: true })}
            />
            {errors.namePic && <Error>담당자 이름을 입력해 주세요.</Error>}
          </InputDiv>
        </Flex>
        <Flex>
          <InputDiv>
            <Label>담당자 연락처</Label>
            <InputS
              placeholder="ex) 010-1234-5678"
              style={errors.phoneNumber ? { border: "2px solid #ff0000" } : {}}
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
          <InputDiv>
            <Label>이메일</Label>
            <InputS
              placeholder="ex) qwer1234@abc.com"
              style={errors.emailPic ? { border: "2px solid #ff0000" } : {}}
              {...register("emailPic", {
                required: true,
                pattern:
                  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
              })}
            />
            {errors.emailPic && errors.emailPic.type === "required" && (
              <Error>이메일을 작성해 주세요.</Error>
            )}
            {errors.emailPic && errors.emailPic.type === "pattern" && (
              <Error>이메일 형식에 맞게 작성해 주세요.</Error>
            )}
          </InputDiv>
        </Flex>
      </div>
      <Hr />
      <div>
        <Flex>
          <InputDiv>
            <Label>채용 직책</Label>
            <InputS
              placeholder="ex) Spring 개발자"
              style={errors.position ? { border: "2px solid #ff0000" } : {}}
              {...register("position", { required: true })}
            />
            {errors.position && <Error>채용 직책을 입력해 주세요.</Error>}
          </InputDiv>
          <InputDiv>
            <Label>채용 직책</Label>
            <InputS
              placeholder="ex) Spring 개발자"
              style={errors.position ? { border: "2px solid #ff0000" } : {}}
              {...register("position", { required: true })}
            />
            {errors.position && <Error>채용 직책을 입력해 주세요.</Error>}
          </InputDiv>
        </Flex>
        <Flex>
          <InputDiv>
            <Label>프로젝트 설명</Label>
            <InputS
              placeholder="ex) 상품 관리 시스템"
              style={errors.projectInfo ? { border: "2px solid #ff0000" } : {}}
              {...register("projectInfo", { required: true })}
            />
            {errors.projectInfo && (
              <Error>프로젝트 설명을 입력해 주세요.</Error>
            )}
          </InputDiv>
          <InputDiv>
            <Label>역할 설명</Label>
            <InputS
              placeholder="ex) 웹 페이지의 서버 개발 담당"
              style={errors.positionInfo ? { border: "2px solid #ff0000" } : {}}
              {...register("positionInfo", { required: true })}
            />
            {errors.positionInfo && <Error>역할 설명을 입력해 주세요.</Error>}
          </InputDiv>
        </Flex>
        <Block>
          <Label>최소 필요 연차</Label>
          <Label>
            <Button>0-1</Button>
            <Button>1-3</Button>
            <Button>3-6</Button>
            <Button>6-10</Button>
            <Button>10+</Button>
          </Label>
        </Block>
      </div>
      <Hr />
      <div>
        <Block>
          <Label>필수적 기술 스택</Label>
          <InputL
            placeholder="ex) Spring, Spring Boot, JPA, Thymeleaf, Lombok, MySQL"
            style={errors.techStackEssential ? { border: "2px solid #ff0000" } : {}}
            {...register("techStackEssential", { required: true })}
          />
          {errors.techStackEssential && <Error>필수적 기술 스택을 입력해 주세요.</Error>}
        </Block>
        <Block>
          <Label>선택적 기술 스택</Label>
          <InputL
            placeholder="ex) AWS EC2, React.JS"
            style={errors.techStackOptional ? { border: "2px solid #ff0000" } : {}}
            {...register("techStackOptional", { required: true })}
          />
          {errors.techStackOptional && (
            <Error>선택적 기술 스택을 입력해 주세요.</Error>
          )}
        </Block>
      </div>
      <Hr />
      <div>
        <Flex>
          <InputDiv>
            <Label>채용 공고 상 키워드</Label>
            <InputS
              placeholder="ex) Spring Developer"
              style={errors.keyword ? { border: "2px solid #ff0000" } : {}}
              {...register("keyword", { required: true })}
            />
            {errors.keyword && (
              <Error>채용 공고 상 키워드를 입력해 주세요.</Error>
            )}
          </InputDiv>
          <InputDiv>
            <Label>연봉 상한선</Label>
            <InputS
              placeholder="ex) 연 2500만원"
              style={errors.salaryRange ? { border: "2px solid #ff0000" } : {}}
              {...register("salaryRange", { required: true })}
            />
            {errors.salaryRange && <Error>연봉 상한선을 입력해 주세요.</Error>}
          </InputDiv>
        </Flex>
        <Block>
          <Label>기타 코멘트</Label>
          <InputM
            placeholder="ex) 학사 졸업자 우대"
            style={errors.comment ? { border: "2px solid #ff0000" } : {}}
            {...register("comment", { required: true })}
          />
          {errors.comment && <Error>기타 코멘트를 입력해 주세요.</Error>}
        </Block>
      </div>
      <SendButton type="submit" />
      <p>{text}</p>
    </Section>
  );
}
const Section = styled.form`
  width: 950px;
  text-align: center;
  margin: 50px auto;
  background-color: #e7e7e7;
  border-radius: 20px;
`;
const Flex = styled.div`
  display: flex;
`;
const Block = styled.div`
  margin: 10px 55px;
`;
const Hr = styled.hr`
  margin: 25px 35px;
  border: 1px solid #000;
`;
const InputDiv = styled.div`
  text-align: center;
  margin: 10px auto;
`;
const Title = styled.h2`
  padding: 30px;
`;
const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 18px;
`;
const InputS = styled.input`
  width: 350px;
  height: 30px;
  margin: auto;
  margin-bottom: 15px;
  padding-left: 10px;
  font-size: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    opacity: 0.7;
  }
`;
const InputM = styled(InputS)`
  width: 830px;
`;
const InputL = styled.textarea`
  width: 830px;
  height: 200px;
  margin: auto;
  margin-bottom: 15px;
  padding-top: 10px;
  padding-left: 10px;
  font-family: "Roboto";
  font-size: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  resize: none;
  outline: none;

  ::placeholder {
    opacity: 0.7;
  }
`;
const Button = styled.button`
  background-color: #b1b1b1;
  margin: 10px 30px 10px 0;
  padding: 10px;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
`;
const SendButton = styled.input`
  background-color: #000;
  color: #fff;
  margin: 30px;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
`;
const Error = styled.p`
  color: #ff0000;
  font-weight: bold;
  @keyframes moveError {
    0% {
      transform: translateX(-1%);
    }
    20% {
      transform: translateX(1%);
    }
    40% {
      transform: translateX(-1%);
    }
    60% {
      transform: translateX(1%);
    }
    80% {
      transform: translateX(-1%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: moveError 0.5s ease-in-out;
`;
export default RecruitForm;
