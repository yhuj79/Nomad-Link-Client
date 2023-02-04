import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import ContentHeader from "components/commons/ContentHeader";
import Form from "components/units/resume/Form";

// 이력서 초기 저장 페이지
function ResumeSave() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"이력서 저장 : "} />
      <ContentHeader title="이력서 저장" button={false} />
      <div style={{ marginTop: "-30px" }}>
        <Form type="save" title="저장" url="/api/mypage/resume" />
      </div>
    </Main>
  );
}

export default ResumeSave;
