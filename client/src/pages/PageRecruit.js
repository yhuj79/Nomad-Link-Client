import styled from "styled-components";
import RecruitState from "../components/commons/RecruitState";
import RecruitForm from "../components/units/RecruitForm";
import { media } from "../style/GlobalStyles";

function PageRecruit() {
  return (
    <main>
      <Title>
        <h2>간편하게 채용공고를 작성해주세요.</h2>
        <h2>리크루팅 전문 컨설턴트가 빠른 해외 개발자 채용을 지원해드립니다.</h2>
      </Title>
      <RecruitState />
      <RecruitForm />
    </main>
  );
}
const Title = styled.section`
  width: 1000px;
  margin: auto;
  padding: 100px;
  text-align: center;

  ${media.lessThan("mobile")`
    display: inline-block;
	`}
`;
export default PageRecruit;
