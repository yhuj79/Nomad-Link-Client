import { useState } from "react";
import { useCookies } from "react-cookie";
import { useStateValue } from "store/StateProvider";
import { TbSearch } from "react-icons/tb";
import { Section, Infor, Select } from "./ParamInput.style";

// 기업 리스트 검색 컴포넌트
function ParamInput() {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]); // eslint-disable-line no-unused-vars
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [role, setRole] = useState(null);
  const [employeeType, setEmployeeType] = useState(null);

  const handleNation = (e) => {
    if (e.target.value === "null") {
      setRole(null);
    } else {
      setRole(e.target.value);
    }
  };
  const handleType = (e) => {
    if (e.target.value === "null") {
      setEmployeeType(null);
    } else {
      setEmployeeType(e.target.value);
    }
  };

  // 분야, 유형을 dispatch => params에 저장 => 리스트 요청
  function SetInput() {
    dispatch({
      type: `SetInputEnt`,
      role: role,
      employeeType: employeeType,
    });
  }

  return (
    <Section>
      {cookies.id ? (
        <Infor>&#9989; 로그인 중입니다. 원하시는 기업에 지원해보세요.</Infor>
      ) : (
        <Infor>&#9888; 지원 신청을 하려면 로그인하셔야 합니다.</Infor>
      )}
      <Select onChange={handleNation}>
        <option value="null">-- 전체 분야 --</option>
        <option value="SERVER">서버</option>
        <option value="FRONTEND">프론트엔드</option>
        <option value="ANDROID">안드로이드</option>
        <option value="IOS">IOS</option>
        <option value="AI">AI</option>
      </Select>
      <Select onChange={handleType}>
        <option value="null">-- 전체 유형 --</option>
        <option value="FULLTIME">정규직</option>
        <option value="PARTTIME">계약직</option>
        <option value="FREELANCER">프리랜서</option>
      </Select>
      <TbSearch
        className="react-search-param-icon"
        onClick={() => SetInput()}
      />
    </Section>
  );
}

export default ParamInput;
