import { post } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonInput } from "styles/Button";
import {
  Section,
  BoxFlex,
  BoxBlock,
  InputDiv,
  Title,
  Label,
  InputS,
  InputM,
  InputR,
  InputL,
  Error,
} from "styles/Form";

// 구인 폼 컴포넌트
function Form() {
  const navigate = useNavigate();

  // react-hook-form Method
  // register: form의 value 이름 설정, required와 pattern 등의 조건 부여 가능
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit 시 실행
  const onSubmit = (data) => {
    const recruitmentFormRequestDto = {
      companyName: data.companyName,
      managerName: data.managerName,
      managerPhoneNumber: data.managerPhoneNumber,
      managerEmail: data.managerEmail,
      recruitmentPosition: data.recruitmentPosition,
      projectDescription: data.projectDescription,
      recruitmentType: data.recruitmentType,
      roleDescription: data.roleDescription,
      minimumAnnual: data.minimumAnnual,
      essentialSkillStack: data.essentialSkillStack,
      optionalSkillStack: data.optionalSkillStack,
      keywords: data.keywords,
      maximumSalary: data.maximumSalary,
      etcComment: data.etcComment,
    };
    formData(recruitmentFormRequestDto);
    navigate("/enterprise/recruit/complete");
  };

  // 구인 폼 전송 함수
  async function formData(data) {
    const url = "/api/enterprise/recruit/form";

    try {
      const response = await post(url, data); // eslint-disable-line no-unused-vars
    } catch (error) {
      console.error(error);
    }
  }

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
                  errors.companyName
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("companyName", { required: true })}
              />
              {errors.companyName && <Error>회사명을 입력해 주세요.</Error>}
            </InputDiv>
            <InputDiv>
              <Label>담당자 이름</Label>
              <InputS
                placeholder="ex) 홍길동"
                style={
                  errors.managerName
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("managerName", { required: true })}
              />
              {errors.managerName && (
                <Error>담당자 이름을 입력해 주세요.</Error>
              )}
            </InputDiv>
          </BoxFlex>
          <BoxFlex>
            <InputDiv>
              <Label>담당자 연락처</Label>
              <InputS
                placeholder="ex) 010-1234-5678"
                style={
                  errors.managerPhoneNumber
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("managerPhoneNumber", {
                  required: true,
                  pattern: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                })}
              />
              {errors.managerPhoneNumber &&
                errors.managerPhoneNumber.type === "required" && (
                  <Error>연락처를 작성해 주세요.</Error>
                )}
              {errors.managerPhoneNumber &&
                errors.managerPhoneNumber.type === "pattern" && (
                  <Error>연락처 형식에 맞게 작성해 주세요. (지역번호 X)</Error>
                )}
            </InputDiv>
            <InputDiv>
              <Label>이메일</Label>
              <InputS
                placeholder="ex) qwer1234@abc.com"
                style={
                  errors.managerEmail
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("managerEmail", {
                  required: true,
                  pattern:
                    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                })}
              />
              {errors.managerEmail &&
                errors.managerEmail.type === "required" && (
                  <Error>이메일을 작성해 주세요.</Error>
                )}
              {errors.managerEmail &&
                errors.managerEmail.type === "pattern" && (
                  <Error>이메일 형식에 맞게 작성해 주세요.</Error>
                )}
            </InputDiv>
          </BoxFlex>
        </div>

        <div>
          <BoxFlex>
            <InputDiv>
              <Label>채용 직책</Label>
              <InputS
                placeholder="ex) Spring 개발자"
                style={
                  errors.recruitmentPosition
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("recruitmentPosition", { required: true })}
              />
              {errors.recruitmentPosition && (
                <Error>채용 직책을 입력해 주세요.</Error>
              )}
            </InputDiv>
            <InputDiv>
              <Label>역할 설명</Label>
              <InputS
                placeholder="ex) 웹 페이지의 서버 개발 담당"
                style={
                  errors.roleDescription
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("roleDescription", { required: true })}
              />
              {errors.roleDescription && (
                <Error>역할 설명을 입력해 주세요.</Error>
              )}
            </InputDiv>
          </BoxFlex>
          <BoxFlex>
            <InputDiv>
              <Label>프로젝트 설명</Label>
              <InputS
                placeholder="ex) 상품 관리 시스템"
                style={
                  errors.projectDescription
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("projectDescription", { required: true })}
              />
              {errors.projectDescription && (
                <Error>프로젝트 설명을 입력해 주세요.</Error>
              )}
            </InputDiv>
            <InputDiv>
              <Label>채용 유형</Label>
              <InputS
                placeholder="ex) 정규직 or 계약직 or 프리랜서"
                style={
                  errors.recruitmentType
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("recruitmentType", { required: true })}
              />
              {errors.recruitmentType && (
                <Error>프로젝트 기간을 입력해 주세요.</Error>
              )}
            </InputDiv>
          </BoxFlex>
        </div>

        <div>
          <BoxBlock>
            <Label>최소 필요 연차</Label>
            <BoxFlex style={{ marginLeft: "-25px" }}>
              <Label>
                <InputR
                  {...register("minimumAnnual", { required: true })}
                  type="radio"
                  name="minimumAnnual"
                  value="ZEROTOONE"
                />
                0-1
              </Label>
              <Label>
                <InputR
                  {...register("minimumAnnual", { required: true })}
                  type="radio"
                  name="minimumAnnual"
                  value="TWOTOFOUR"
                />
                2-4
              </Label>
              <Label>
                <InputR
                  {...register("minimumAnnual", { required: true })}
                  type="radio"
                  name="minimumAnnual"
                  value="FIVETOSEVEN"
                />
                5-7
              </Label>
              <Label>
                <InputR
                  {...register("minimumAnnual", { required: true })}
                  type="radio"
                  name="minimumAnnual"
                  value="EIGHTTOTEN"
                />
                8-10
              </Label>
              <Label>
                <InputR
                  {...register("minimumAnnual", { required: true })}
                  type="radio"
                  name="minimumAnnual"
                  value="MORETHANTEN"
                />
                10 +
              </Label>
            </BoxFlex>
            <Error>
              {errors.minimumAnnual?.type === "required" &&
                "최소 필요 연차를 선택해 주세요."}
            </Error>
          </BoxBlock>
        </div>

        <div>
          <BoxBlock>
            <Label>필수적 기술 스택</Label>
            <InputL
              placeholder="ex) Spring, Spring Boot, JPA, Thymeleaf, Lombok, MySQL"
              style={
                errors.essentialSkillStack
                  ? { borderBottom: "2px solid #ff0000" }
                  : {}
              }
              {...register("essentialSkillStack", { required: true })}
            />
            {errors.essentialSkillStack && (
              <Error>필수적 기술 스택을 입력해 주세요.</Error>
            )}
          </BoxBlock>
          <BoxBlock>
            <Label>선택적 기술 스택</Label>
            <InputL
              placeholder="ex) AWS EC2, React.JS"
              style={
                errors.optionalSkillStack
                  ? { borderBottom: "2px solid #ff0000" }
                  : {}
              }
              {...register("optionalSkillStack", { required: true })}
            />
            {errors.optionalSkillStack && (
              <Error>선택적 기술 스택을 입력해 주세요.</Error>
            )}
          </BoxBlock>
        </div>

        <div>
          <BoxFlex>
            <InputDiv>
              <Label>채용 공고 상 키워드</Label>
              <InputS
                placeholder="ex) Spring Developer"
                style={
                  errors.keywords ? { borderBottom: "2px solid #ff0000" } : {}
                }
                {...register("keywords", { required: true })}
              />
              {errors.keywords && (
                <Error>채용 공고 상 키워드를 입력해 주세요.</Error>
              )}
            </InputDiv>
            <InputDiv>
              <Label>연봉 상한선</Label>
              <InputS
                placeholder="ex) 연 2500만원"
                style={
                  errors.maximumSalary
                    ? { borderBottom: "2px solid #ff0000" }
                    : {}
                }
                {...register("maximumSalary", { required: true })}
              />
              {errors.maximumSalary && (
                <Error>연봉 상한선을 입력해 주세요.</Error>
              )}
            </InputDiv>
          </BoxFlex>
          <BoxBlock>
            <Label>기타 코멘트</Label>
            <InputM
              placeholder="ex) 학사 졸업자 우대"
              style={
                errors.etcComment ? { borderBottom: "2px solid #ff0000" } : {}
              }
              {...register("etcComment", { required: true })}
            />
            {errors.etcComment && <Error>기타 코멘트를 입력해 주세요.</Error>}
          </BoxBlock>
        </div>
        <ButtonInput type="submit" />
      </form>
    </Section>
  );
}
export default Form;
