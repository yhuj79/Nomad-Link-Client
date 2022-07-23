import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Section,
  BoxFlex,
  BoxBlock,
  Hr,
  InputDiv,
  Title,
  Label,
  InputS,
  InputM,
  InputR,
  InputL,
  SendButton,
  Error,
} from "./StyledForm";

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
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>채용이 확정되기 전에는 어떠한 비용도 청구되지 않습니다.</Title>
        <div>
          <BoxFlex>
            <InputDiv>
              <Label>회사명</Label>
              <InputS
                placeholder="ex) 노마드 링크"
                style={
                  errors.nameCompany ? { border: "2px solid #ff0000" } : {}
                }
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
          </BoxFlex>
          <BoxFlex>
            <InputDiv>
              <Label>담당자 연락처</Label>
              <InputS
                placeholder="ex) 010-1234-5678"
                style={
                  errors.phoneNumber ? { border: "2px solid #ff0000" } : {}
                }
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
          </BoxFlex>
        </div>
        <Hr />
        <div>
          <BoxFlex>
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
          </BoxFlex>
          <BoxFlex>
            <InputDiv>
              <Label>프로젝트 설명</Label>
              <InputS
                placeholder="ex) 상품 관리 시스템"
                style={
                  errors.projectInfo ? { border: "2px solid #ff0000" } : {}
                }
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
                style={
                  errors.positionInfo ? { border: "2px solid #ff0000" } : {}
                }
                {...register("positionInfo", { required: true })}
              />
              {errors.positionInfo && <Error>역할 설명을 입력해 주세요.</Error>}
            </InputDiv>
          </BoxFlex>
        </div>
        <Hr />
        <div>
          <BoxBlock>
            <Label>최소 필요 연차</Label>
            <BoxFlex style={{ marginLeft: "-25px" }}>
              <Label>
                <InputR
                  {...register("needYear", { required: true })}
                  type="radio"
                  name="needYear"
                  value="0-1"
                />
                0-1
              </Label>
              <Label>
                <InputR
                  {...register("needYear", { required: true })}
                  type="radio"
                  name="needYear"
                  value="2-4"
                />
                2-4
              </Label>
              <Label>
                <InputR
                  {...register("needYear", { required: true })}
                  type="radio"
                  name="needYear"
                  value="5-7"
                />
                5-7
              </Label>
              <Label>
                <InputR
                  {...register("needYear", { required: true })}
                  type="radio"
                  name="needYear"
                  value="8-10"
                />
                8-10
              </Label>
              <Label>
                <InputR
                  {...register("needYear", { required: true })}
                  type="radio"
                  name="needYear"
                  value="10+"
                />
                10+
              </Label>
            </BoxFlex>
            <Error>
              {errors.needYear?.type === "required" &&
                "최소 필요 연차를 선택해 주세요."}
            </Error>
          </BoxBlock>
        </div>
        <Hr />
        <div>
          <BoxBlock>
            <Label>필수적 기술 스택</Label>
            <InputL
              placeholder="ex) Spring, Spring Boot, JPA, Thymeleaf, Lombok, MySQL"
              style={
                errors.techStackEssential ? { border: "2px solid #ff0000" } : {}
              }
              {...register("techStackEssential", { required: true })}
            />
            {errors.techStackEssential && (
              <Error>필수적 기술 스택을 입력해 주세요.</Error>
            )}
          </BoxBlock>
          <BoxBlock>
            <Label>선택적 기술 스택</Label>
            <InputL
              placeholder="ex) AWS EC2, React.JS"
              style={
                errors.techStackOptional ? { border: "2px solid #ff0000" } : {}
              }
              {...register("techStackOptional", { required: true })}
            />
            {errors.techStackOptional && (
              <Error>선택적 기술 스택을 입력해 주세요.</Error>
            )}
          </BoxBlock>
        </div>
        <Hr />
        <div>
          <BoxFlex>
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
                style={
                  errors.salaryRange ? { border: "2px solid #ff0000" } : {}
                }
                {...register("salaryRange", { required: true })}
              />
              {errors.salaryRange && (
                <Error>연봉 상한선을 입력해 주세요.</Error>
              )}
            </InputDiv>
          </BoxFlex>
          <BoxBlock>
            <Label>기타 코멘트</Label>
            <InputM
              placeholder="ex) 학사 졸업자 우대"
              style={errors.comment ? { border: "2px solid #ff0000" } : {}}
              {...register("comment", { required: true })}
            />
            {errors.comment && <Error>기타 코멘트를 입력해 주세요.</Error>}
          </BoxBlock>
        </div>
        <SendButton type="submit" />
        <p>{text}</p>
      </form>
    </Section>
  );
}
export default RecruitForm;
