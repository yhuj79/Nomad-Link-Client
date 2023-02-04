import { Main } from "styles/Pages";
import Procedure from "components/units/recruit/Procedure";
import Form from "components/units/recruit/Form";
import TitleSection from "components/commons/TitleSection";
import HelmetAsync from "hooks/HelmetAsync";

// 구인 폼 작성 페이지
function RecruitForm() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"기업 서비스 : "} />
      <TitleSection
        padding={"100px"}
        mediumOne={"간편하게 채용공고를 작성해주세요."}
        mediumTwo={
          "리크루팅 전문 컨설턴트가 빠른 해외 개발자 채용을 지원해드립니다."
        }
      />
      <Procedure />
      <Form />
    </Main>
  );
}
export default RecruitForm;
