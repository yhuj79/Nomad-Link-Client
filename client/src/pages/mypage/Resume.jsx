import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import Check from "components/units/resume/Check";
import ContentHeader from "components/commons/ContentHeader";

// 이력서 페이지
function Resume() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"이력서 : "} />
      <ContentHeader
        title="이력서"
        link={"/mypage"}
        linkName={"마이페이지로 이동"}
      />
      <Check />
    </Main>
  );
}

export default Resume;
