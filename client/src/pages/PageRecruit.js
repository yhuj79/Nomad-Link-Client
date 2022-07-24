import styled from "styled-components";
import RecruitState from "../components/commons/RecruitState";
import RecruitForm from "../components/units/RecruitForm";
import { media } from "../style/GlobalStyles";

function PageRecruit() {
  return (
    <Main>
      <Title>
        <Text>간편하게 채용공고를 작성해주세요.</Text>
        <Text>리크루팅 전문 컨설턴트가 빠른 해외 개발자 채용을 지원해드립니다.</Text>
      </Title>
      <RecruitState />
      <RecruitForm />
    </Main>
  );
}
const Main = styled.main`
  width: 1000px;
  justify-content: center;
  margin: auto;

  ${media.lessThan("tablet")`
    width: 700px;
	`}
  ${media.lessThan("mobile")`
    width: 270px;
	`}
`
const Title = styled.section`
  padding: 100px;
  text-align: center;

  ${media.lessThan("tablet")`
    padding: 70px;
	`}
  ${media.lessThan("mobile")`
  padding: 30px;
	`}
`;
const Text = styled.h2`
  ${media.lessThan("tablet")`
    font-size: 20px;
	`}
  ${media.lessThan("mobile")`
    font-size: 15px;
	`}
`
export default PageRecruit;
