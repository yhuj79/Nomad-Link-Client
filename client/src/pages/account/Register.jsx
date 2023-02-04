import { Main } from "styles/Pages";
import RegisterForm from "components/units/account/RegisterForm";
import TitleSection from "components/commons/TitleSection";
import HelmetAsync from "hooks/HelmetAsync";

// 회원가입 페이지
function Register() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"회원가입 : "} />
      <TitleSection padding={"40px"} mediumOne={"회원가입"} />
      <RegisterForm />
    </Main>
  );
}

export default Register;
