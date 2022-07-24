import styled from "styled-components";
import ReceiptIcon from "@mui/icons-material/ReceiptLong";
import ConsultIcon from "@mui/icons-material/Group";
import WriteIcon from "@mui/icons-material/BorderColor";
import RecruitStartIcon from "@mui/icons-material/FindInPage";

function RecruitState() {
  return (
    <Section>
      <Box>
        <Circle>1</Circle>
        <Hr />
        <Circle>2</Circle>
        <Hr />
        <Circle>3</Circle>
        <Hr />
        <Circle>4</Circle>
      </Box>
      <Box>
        <Li>
          <ReceiptIcon sx={muiIcon} />
          <Phase>구인 폼 제출</Phase>
        </Li>
        <Li>
          <ConsultIcon sx={muiIcon} />
          <Phase>컨설턴트 상담</Phase>
        </Li>
        <Li>
          <WriteIcon sx={muiIcon} />
          <Phase>계약서 작성</Phase>
        </Li>
        <Li>
          <RecruitStartIcon sx={muiIcon} />
          <Phase>채용 시작</Phase>
        </Li>
      </Box>
    </Section>
  );
}
const Section = styled.section`
  text-align: center;
  margin: 20px auto;
  display: block;
`;
const Box = styled.div`
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #b778ff;
  color: #fff;
  border-radius: 100%;
  border: 1px solid #b778ff;
`;
const Hr = styled.hr`
  width: 215px;
  border-top: 1px solid #000;
  margin: 15px 0 15px;
`;
const Li = styled.div`
  width: 200px;
  justify-content: center;
  margin: 0 30px 0 30px;
`;
const muiIcon = {
  fontSize: "35px",
};
const Phase = styled.h2`
  list-style: none;
  font-size: 24px;
`;
export default RecruitState;
