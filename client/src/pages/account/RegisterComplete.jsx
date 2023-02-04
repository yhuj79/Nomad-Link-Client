import { Main } from "styles/Pages";
import { useNavigate } from "react-router-dom";
import TitleSection from "components/commons/TitleSection";
import HelmetAsync from "hooks/HelmetAsync";
import { Button } from "styles/Button";

// 회원가입 완료 페이지
function RegisterComplete() {
  const navigate = useNavigate();

  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"회원가입 : "} />
      <TitleSection
        padding={"100px"}
        largeOne={"환영합니다!"}
        mediumOne={"Nomad Link 가입이 완료되었습니다."}
        mediumTwo={"서비스를 이용하시려면 로그인을 해주세요."}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => navigate(`/login`)}>로그인</Button>
        <Button onClick={() => navigate(`/`)}>메인으로</Button>
      </div>
    </Main>
  );
}

export default RegisterComplete;
