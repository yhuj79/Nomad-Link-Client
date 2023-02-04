import { IoReceiptSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FaFileSignature } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { Section, Box, Circle, Hr, Li, Phase } from "./Procedure.style";

// 구인 폼에서 진행도를 설명하는 컴포넌트
function Procedure() {
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
          <IoReceiptSharp className="react-procedure-icon" />
          <Phase>구인 폼 제출</Phase>
        </Li>
        <Li>
          <BsPeopleFill className="react-procedure-icon" />
          <Phase>컨설턴트 상담</Phase>
        </Li>
        <Li>
          <FaFileSignature className="react-procedure-icon" />
          <Phase>계약서 작성</Phase>
        </Li>
        <Li>
          <MdFindInPage className="react-procedure-icon" />
          <Phase>채용 시작</Phase>
        </Li>
      </Box>
    </Section>
  );
}
export default Procedure;
