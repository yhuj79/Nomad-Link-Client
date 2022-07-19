import styled from "styled-components";

function RecruitForm() {
  return (
    <Section>
      <Title>채용이 확정되기 전에는 어떠한 비용도 청구되지 않습니다.</Title>
      <div>
        <Flex>
          <InputDiv>
            <Label>회사명</Label>
            <InputS placeholder="ex) 노마드 링크"></InputS>
          </InputDiv>
          <InputDiv>
            <Label>담당자 이름</Label>
            <InputS placeholder="ex) 홍길동"></InputS>
          </InputDiv>
        </Flex>
        <Flex>
          <InputDiv>
            <Label>담당자 연락처</Label>
            <InputS placeholder="ex) 010-1234-5678"></InputS>
          </InputDiv>
          <InputDiv>
            <Label>이메일</Label>
            <InputS placeholder="ex) qwer1234@abc.com"></InputS>
          </InputDiv>
        </Flex>
      </div>
      <Hr />
      <div>
        <Flex>
          <InputDiv>
            <Label>채용 직책</Label>
            <InputS placeholder="ex) Spring 개발자"></InputS>
          </InputDiv>
          <InputDiv>
            <Label>채용 직책</Label>
            <InputS placeholder="ex) Spring 개발자"></InputS>
          </InputDiv>
        </Flex>
        <Flex>
          <InputDiv>
            <Label>프로젝트 설명</Label>
            <InputS placeholder="ex) 상품 관리 시스템"></InputS>
          </InputDiv>
          <InputDiv>
            <Label>역할 설명</Label>
            <InputS placeholder="ex) 웹 페이지의 서버 개발 담당"></InputS>
          </InputDiv>
        </Flex>
        <Block>
          <Label>최소 필요 연차</Label>
          <Label>
            <Button>0-1</Button>
            <Button>1-3</Button>
            <Button>3-6</Button>
            <Button>6-10</Button>
            <Button>10+</Button>
          </Label>
        </Block>
      </div>
      <Hr />
      <div>
        <Block>
          <Label>필수적 기술 스택</Label>
          <InputL placeholder="ex) Spring, Spring Boot, JPA, Thymeleaf, Lombok, MySQL"></InputL>
        </Block>
        <Block>
          <Label>선택적 기술 스택</Label>
          <InputL placeholder="ex) AWS EC2, React.JS"></InputL>
        </Block>
      </div>
      <Hr />
      <div>
        <Flex>
          <InputDiv>
            <Label>채용 공고 상 키워드</Label>
            <InputS placeholder="ex) Spring Developer"></InputS>
          </InputDiv>
          <InputDiv>
            <Label>연봉 상한선</Label>
            <InputS placeholder="ex) 연 2500만원"></InputS>
          </InputDiv>
        </Flex>
        <Block>
          <Label>기타 코멘트</Label>
          <InputM placeholder="ex) 학사 졸업자 우대"></InputM>
        </Block>
      </div>
      <SendButton>채용 공고 전송하기</SendButton>
    </Section>
  );
}
const Section = styled.section`
  width: 950px;
  text-align: center;
  margin: 50px auto;
  background-color: #e7e7e7;
  border-radius: 20px;
`;
const Flex = styled.div`
  display: flex;
`;
const Block = styled.div`
  margin: 10px 55px;
`;
const Hr = styled.hr`
  margin: 25px 35px;
  border: 1px solid #000;
`;
const InputDiv = styled.div`
  text-align: center;
  margin: 10px auto;
`;
const Title = styled.h2`
  padding: 30px;
`;
const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 18px;
`;
const InputS = styled.input`
  width: 350px;
  height: 30px;
  margin: auto;
  padding-left: 10px;
  font-size: 15px;
  border: 2px solid #000;
  border-radius: 10px;

  ::placeholder {
    opacity: 0.7;
  }
`;
const InputL = styled.textarea`
  width: 830px;
  height: 200px;
  margin: auto;
  margin-bottom: 15px;
  padding-top: 10px;
  padding-left: 10px;
  font-family: "Roboto";
  font-size: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  resize: none;

  ::placeholder {
    opacity: 0.7;
  }
`;
const InputM = styled(InputS)`
  width: 830px;
`;
const Button = styled.button`
  background-color: #b1b1b1;
  margin: 10px 30px 10px 0;
  padding: 10px;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
`;
const SendButton = styled.button`
  background-color: #000;
  color: #fff;
  margin: 30px;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
`;
export default RecruitForm;
