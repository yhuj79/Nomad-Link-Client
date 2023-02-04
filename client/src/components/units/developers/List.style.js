import styled from "styled-components";

export const Section = styled.section`
  cursor: default;
  width: 950px;
  text-align: center;
  margin: 0 auto 40px;
  padding: 10px 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${(props) => props.bgColor};
`;
