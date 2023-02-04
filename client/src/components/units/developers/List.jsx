import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import Profile from "./Profile";
import TitleSection from "components/commons/TitleSection";
import { Section } from "./List.style";

// 개발자 리스트 컴포넌트
function List({ endPoint, bgColor, unitColor }) {
  const [initialState, dispatch] = useStateValue();
  const [user, setUser] = useState([]);

  // params를 dispatch로 초기화 (기업 리스트에서 개발자 리스트로 넘어올 경우 params가 남아있기 때문)
  useEffect(() => {
    setTimeout(function () {
      dispatch({
        type: `Delete`,
      });
    }, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 개발자 리스트 요청
  useEffect(() => {
    const url = `/api/enterprise/recruit/${endPoint}`;
    axios
      .get(url, {
        // params에 따라 리스트 조건부 요청
        params: {
          nation: initialState.nation,
          employeeType: initialState.employeeType,
          techStack: initialState.searchParams,
        },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialState]);

  if (user?.length) {
    return (
      <Section bgColor={bgColor}>
        {user.map((m, indexA) => {
          return (
            <Profile
              key={indexA}
              unitColor={unitColor}
              realName={m.realName}
              nation={m.nation}
              role={m.role}
              techStacks={m.techStacks}
            />
          );
        })}
      </Section>
    );
  } else {
    return (
      <Section bgColor={bgColor}>
        <TitleSection padding={"50px"} mediumOne={"해당 사항이 없습니다."} />
      </Section>
    );
  }
}

export default List;
