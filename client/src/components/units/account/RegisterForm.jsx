import { post } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ButtonInput } from "styles/Button";
import {
  BoxFlex,
  InputDiv,
  Label,
  InputS,
  Select,
  ErrDiv,
  Error,
} from "styles/Form";
import { Section, Form, OptionDiv } from "./RegisterForm.style";

// 회원가입 폼 컴포넌트
function RegisterForm() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const navigate = useNavigate();

  // Error 상태 state
  const [idOver, setIdOver] = useState(false);
  const [passwdOver, setPasswdIdOver] = useState(false);

  // react-hook-form Method
  // register: form의 value 이름 설정, required와 pattern 등의 조건 부여 가능
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit 시 실행
  const onSubmit = (data) => {
    const registerRequestDto = {
      userId: data.userId,
      email: data.email,
      password: data.password,
      realName: data.realName,
      phoneNumber: data.phoneNumber,
      annual: data.annual,
      nation: data.nation,
    };
    formData(registerRequestDto);
  };

  // 회원가입 전송 함수
  async function formData(data) {
    const url = "/api/register";

    try {
      const response = await post(url, data); // eslint-disable-line no-unused-vars
      removeCookie("id");
      navigate("/register/complete");
    } catch (error) {
      // Error state를 먼저 초기화 후 조건부 출력
      let errCode = error.response.data.errorMessage;
      setIdOver(false);
      setPasswdIdOver(false);
      if (errCode === "중복된 아이디가 존재합니다.") {
        setIdOver(true);
      } else if (
        errCode ===
        "비밀번호는 4~15자리의 숫자,문자,특수문자로 이루어져야합니다."
      ) {
        setPasswdIdOver(true);
      } else {
        console.log(errCode);
      }
    }
  }

  return (
    <Section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BoxFlex>
          <OptionDiv>
            <Label>국가</Label>
            <Select {...register("nation", { required: true })}>
              <option value="">-- 전체 국가 --</option>
              <option value="INDIA">인도</option>
              <option value="CHINA">중국</option>
              <option value="VIETNAM">베트남</option>
              <option value="PHILIPPINE">필리핀</option>
            </Select>
            <ErrDiv style={{ marginTop: "10px" }}>
              {errors.nation?.type === "required" && (
                <Error>국가를 입력해 주세요.</Error>
              )}
            </ErrDiv>
          </OptionDiv>
          <OptionDiv>
            <Label>개발 경력</Label>
            <Select {...register("annual", { required: true })}>
              <option value="">-- 전체 경력 --</option>
              <option value="ZEROTOONE">0-1</option>
              <option value="TWOTOFOUR">2-4</option>
              <option value="FIVETOSEVEN">5-7</option>
              <option value="EIGHTTOTEN">8-10</option>
              <option value="MORETHANTEN">10 +</option>
            </Select>
            <ErrDiv style={{ marginTop: "10px" }}>
              {errors.annual?.type === "required" && (
                <Error>경력을 입력해 주세요.</Error>
              )}
            </ErrDiv>
          </OptionDiv>
        </BoxFlex>
        <InputDiv>
          <Label>아이디</Label>
          <InputS
            style={
              errors.userId || idOver
                ? { borderBottom: "2px solid #ff0000" }
                : {}
            }
            {...register("userId", { required: true })}
          />
          <ErrDiv>
            {errors.userId && <Error>아이디를 입력해 주세요.</Error>}
            {idOver && <Error>중복된 아이디가 존재합니다.</Error>}
          </ErrDiv>
        </InputDiv>
        <InputDiv>
          <Label>비밀번호</Label>
          <InputS
            type="password"
            style={
              errors.password || passwdOver
                ? { borderBottom: "2px solid #ff0000" }
                : {}
            }
            {...register("password", { required: true })}
          />
          {errors.password && <Error>비밀번호를 입력해 주세요.</Error>}
          <ErrDiv>
            {passwdOver && (
              <Error>
                비밀번호는 4~15자리의 숫자,문자,특수문자로 이루어져야합니다.
              </Error>
            )}
          </ErrDiv>
        </InputDiv>
        <InputDiv>
          <Label>이름</Label>
          <InputS
            style={errors.realName ? { borderBottom: "2px solid #ff0000" } : {}}
            {...register("realName", { required: true })}
          />
          <ErrDiv>
            {errors.realName && <Error>이름을 입력해 주세요.</Error>}
          </ErrDiv>
        </InputDiv>
        <InputDiv>
          <Label>연락처</Label>
          <InputS
            style={
              errors.phoneNumber ? { borderBottom: "2px solid #ff0000" } : {}
            }
            {...register("phoneNumber", {
              required: true,
              pattern: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
            })}
          />
          <ErrDiv>
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
              <Error>연락처를 입력해 주세요.</Error>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
              <Error>연락처 형식에 맞게 작성해 주세요. (지역번호 X)</Error>
            )}
          </ErrDiv>
        </InputDiv>
        <InputDiv>
          <Label>이메일</Label>
          <InputS
            style={errors.email ? { borderBottom: "2px solid #ff0000" } : {}}
            {...register("email", {
              required: true,
              pattern:
                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
            })}
          />
          <ErrDiv>
            {errors.email && errors.email.type === "required" && (
              <Error>이메일을 작성해 주세요.</Error>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <Error>이메일 형식에 맞게 작성해 주세요.</Error>
            )}
          </ErrDiv>
        </InputDiv>
        <ButtonInput
          style={{ marginBottom: "0" }}
          type="submit"
          value="가입하기"
        />
      </Form>
    </Section>
  );
}

export default RegisterForm;
