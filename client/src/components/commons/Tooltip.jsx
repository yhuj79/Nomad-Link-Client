import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { MdArrowDropDown } from "react-icons/md";
import { Div, Box, SpanId, Tb } from "./Tooltip.style";

// 로그인 시 ID 클릭하면 보이는 툴팁 박스
function Tooltip({ userId }) {
  const navigate = useNavigate();

  return (
    <Div>
      <Box data-tip data-for="registerTip" data-border="false">
        <SpanId>{userId}</SpanId>
        <MdArrowDropDown className="react-caret-icon" />
      </Box>

      <ReactTooltip
        id="registerTip"
        place="top"
        effect="solid"
        event="click"
        globalEventOff="click"
        clickable={true}
        isCapture={true}
      >
        <Tb onClick={() => navigate(`/mypage`)}>마이페이지</Tb><br />
        <Tb onClick={() => navigate(`/mypage/resume`)}>이력서</Tb><br />
      </ReactTooltip>
    </Div>
  );
}
export default Tooltip;
