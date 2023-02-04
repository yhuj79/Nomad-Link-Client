import { Main } from "styles/Pages";
import LoginForm from "components/units/account/LoginForm";
import TitleSection from "components/commons/TitleSection";
import HelmetAsync from "hooks/HelmetAsync";

// 로그인 페이지
function Login() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"로그인 : "} />
      <TitleSection padding={"40px"} mediumOne={"로그인"} />
      <LoginForm />
    </Main>
  );
}

export default Login;
