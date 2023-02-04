import { Main } from "styles/Pages";
import HelmetAsync from "hooks/HelmetAsync";
import ContentHeader from "components/commons/ContentHeader";
import List from "components/units/enterprises/List";
import ParamInput from "components/units/enterprises/ParamInput";

// 기업 리스트 페이지
function EmployEnterprises() {
  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HelmetAsync title={"개인 서비스 : "} />
      <ContentHeader title="기업 리스트" button={true} />
      <ParamInput />
      <List bgColor={({ theme }) => theme.bgSection} endPoint={""} />
    </Main>
  );
}

export default EmployEnterprises;
