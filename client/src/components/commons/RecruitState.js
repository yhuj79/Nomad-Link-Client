import styled from "styled-components";
import ReceiptIcon from "@mui/icons-material/ReceiptLong";
import ConsultIcon from "@mui/icons-material/Group";
import WriteIcon from "@mui/icons-material/BorderColor";
import RecruitStartIcon from "@mui/icons-material/FindInPage";

function RecruitState() {
  return (
    <RecruitStateDiv>
      <Section>
        <ReceiptIcon sx={muiIcon} />
        <Phase>구인 폼 작성, 전송</Phase>
      </Section>
      <Section>
        <ConsultIcon sx={muiIcon} />
        <Phase>컨설턴트 상담</Phase>
      </Section>
      <Section>
        <WriteIcon sx={muiIcon} />
        <Phase>계약서 작성</Phase>
      </Section>
      <Section>
        <RecruitStartIcon sx={muiIcon} />
        <Phase>채용 시작</Phase>
      </Section>
    </RecruitStateDiv>
  );
}
const RecruitStateDiv = styled.div`
  text-align: center;
  margin: 20px auto;
  display: flex;
`;
const Section = styled.div`
  width: 200px;
  justify-content: center;
  margin: 0 30px 0 30px;
`;
const muiIcon = {
  fontSize: "35px",
};
const Phase = styled.li`
  list-style: none;
  font-size: 24px;
`;
export default RecruitState;
