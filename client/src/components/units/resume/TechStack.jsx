import { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "store/StateProvider";
import {
  Div,
  BoxSearch,
  TechSearch,
  Result,
  ResultText,
  BoxStack,
  TechName,
  DelButton,
  Error,
} from "./TechStack.style";

// 기술 스택 컴포넌트
// Check 컴포넌트 내부에 위치
// Reducer에 담아놓은 기술스택 값이 이력서 폼 전송 시 같이 전송됨
function TechStack({ uTech }) {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [stack, setStack] = useState([]);
  const [error, setError] = useState(false);

  // 기술 스택을 요청
  useEffect(() => {
    const url = `/api/techstack`;
    axios
      .get(url)
      .then((response) => setStack(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 기존에 담겨있는 기술스택을 초기화
  // DB에서 요청받은 이력서의 기술스택, 추가한 기술스택을 dispatch
  useEffect(() => {
    dispatch({ type: `DelStackAll` });
    for (let index in uTech) {
      dispatch({
        type: `SaveStack`,
        item: uTech[index].techName,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [keyword, setKeyword] = useState();
  const [results, setResult] = useState([]);

  const updateField = (field, value, update = true) => {
    if (update) onSearch(value);
    if (field === "keyword") {
      setKeyword(value);
    }
    if (field === "results") {
      setResult(value);
    }
  };

  // 검색 시 요청 받은 기술 스택과 입력값을 대조
  const onSearch = (text) => {
    var results = stack.filter(
      (item) => true === matchName(item.techName, text)
    );
    setResult({ results });
  };
  const matchName = (name, keyword) => {
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword === "") return false;
    return name === keyword.toString().toLowerCase();
  };

  // 검색 결과를 클릭 시 필드에 추가된 기술스택 생성
  // overlap을 통해 중복 발생 시 에러 처리
  const updateText = (text) => {
    updateField("keyword", "");
    updateField("results", []);
    const overlap = initialState.techStack.findIndex(
      (techStackItem) => techStackItem === text
    );
    if (overlap === -1) {
      dispatch({
        type: `SaveStack`,
        item: text,
      });
      setError(false);
    } else {
      setError(true);
    }
  };
  var renderResults;
  const arr = results["results"];
  if (arr) {
    renderResults = arr.map((item) => {
      return (
        <SearchView
          updateText={updateText}
          name={item.techName}
          key={item.id}
        />
      );
    });
  }
  return (
    <Div>
      <BoxSearch>
        <TechSearch
          placeholder="기술 스택을 검색하여 추가하세요."
          value={keyword || ""}
          onChange={(e) => updateField("keyword", e.target.value)}
        />
        <Result>
          {renderResults}
          {error ? <Error>이미 등록된 기술스택입니다.</Error> : null}
        </Result>
      </BoxSearch>
      <BoxStack style={{ display: "flex", flexWrap: "wrap" }}>
        {initialState.techStack.length === 0 ? (
          <h1 style={{ color: "#000087" }}>
            등록된 기술스택이 없습니다. 추가해주세요.
          </h1>
        ) : null}
        {initialState.techStack.map((techName, index) => {
          return (
            <TechName key={index}>
              {techName.length > 13 ? (
                <p style={{ marginTop: "8px", fontSize: "12px" }}>{techName}</p>
              ) : (
                <p style={{ marginTop: "6px" }}>{techName}</p>
              )}
              <DelButton
                onClick={() => dispatch({ type: `DelStack`, item: techName })}
              >
                X
              </DelButton>
            </TechName>
          );
        })}
      </BoxStack>
    </Div>
  );
}

function SearchView({ name, updateText }) {
  return <ResultText onClick={() => updateText(name)}>{name}</ResultText>;
}

export default TechStack;
