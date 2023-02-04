import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import Profile from "./Profile";
import TitleSection from "components/commons/TitleSection";
import { Section } from "./List.style";

// 기업 리스트 컴포넌트
function List({ bgColor, endPoint }) {
  const [initialState, dispatch] = useStateValue();
  const [enterprise, setEnterprise] = useState([]);

  // params를 dispatch로 초기화 (개발자 리스트에서 기업 리스트로 넘어올 경우 params가 남아있기 때문)
  useEffect(() => {
    setTimeout(function () {
      dispatch({
        type: `Delete`,
      });
    }, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 기업 리스트 요청
  useEffect(() => {
    const url = `/api/private/employ/enterprises/${endPoint}`;
    axios
      .get(url, {
        // params에 따라 리스트 조건부 요청
        params: {
          role: initialState.role,
          employeeType: initialState.employeeType,
        },
      })
      .then((response) => setEnterprise(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialState]);

  // 데이터를 shuffle 한다면
  // const shuffle = enterprise.sort(() => Math.random() - 0.5);

  if (enterprise?.length) {
    return (
      <Section bgColor={bgColor}>
        {enterprise.map((m, indexA) => {
          return (
            <Profile
              key={indexA}
              id={m.id}
              enterpriseName={m.enterpriseName}
              title={m.title}
              techStacks={m.techStacks}
              enterpriseLocation={m.enterpriseLocation}
              annual={m.annual}
            />
          );
        })}
      </Section>
    );
  } else {
    return (
      <Section bgColor={bgColor}>
        <div style={{ width: "100%" }}>
          <TitleSection padding={"80px"} mediumOne={"해당 사항이 없습니다."} />
        </div>
      </Section>
    );
  }
}

export default List;
