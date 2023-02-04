import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import ContentHeader from "components/commons/ContentHeader";
import MyInformation from "components/units/mypage/MyInformation";

// 마이페이지 페이지
function MyPage() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"마이페이지 : "} />
      <ContentHeader
        title="마이페이지"
        link={"/mypage/resume"}
        linkName={"이력서로 이동"}
      />
      <MyInformation />
    </Main>
  );
}

export default MyPage;
