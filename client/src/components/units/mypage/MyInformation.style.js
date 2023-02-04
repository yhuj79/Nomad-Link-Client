import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  display: inline-block;
  background-color: ${({ theme }) => theme.bgForm};
  text-align: center;
  border-radius: 20px;
  margin: 0 auto 50px;
  padding-bottom: 40px;
`;