import styled from "styled-components";

function RecruitSummary() {
  return (
    <RecruitSummaryDiv>
      <Title>
        <h2>간편하게 채용공고를 작성해주세요.</h2>
        <h2>리크루팅 전문 컨설턴트가 빠른 해외 개발자 채용을 지원해드립니다.</h2>
      </Title>
      <NumberLine>
        <Circle>1</Circle>
        <Hr />
        <Circle>2</Circle>
        <Hr />
        <Circle>3</Circle>
        <Hr />
        <Circle>4</Circle>
      </NumberLine>
    </RecruitSummaryDiv>
  );
}
const RecruitSummaryDiv = styled.div`
  text-align: center;
`;
const Title = styled.div`
  margin: 100px;
`;
const NumberLine = styled.div`
  display: flex;
  justify-content: center;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #B778FF;
  color: #fff;
  border-radius: 100%;
  border: 1px solid #B778FF;
`;
const Hr = styled.hr`
  width: 215px;
  border-top: 1px solid #000;
  margin: 15px 0 15px;
`;
export default RecruitSummary;
