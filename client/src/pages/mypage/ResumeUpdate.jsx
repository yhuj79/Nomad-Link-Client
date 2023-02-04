import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import ContentHeader from "components/commons/ContentHeader";
import { useCookies } from "react-cookie";
import Form from "components/units/resume/Form";

// 이력서 수정 페이지
function ResumeUpdate() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"이력서 수정 : "} />
      <ContentHeader title="이력서 수정" button={false} />
      <div style={{ marginTop: "-30px" }}>
        <Form
          type="update"
          title="수정"
          url={`/api/mypage/resume/update/${cookies.id}`}
        />
      </div>
    </Main>
  );
}

export default ResumeUpdate;
