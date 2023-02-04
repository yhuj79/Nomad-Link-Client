import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import Detail from "components/units/enterprises/Detail";
import ContentHeader from "components/commons/ContentHeader";

// 채용 공고 페이지
function Notice() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"채용 공고 : "} />
      <ContentHeader title="채용 공고" button={true} />
      <Detail />
    </Main>
  );
}

export default Notice;
