import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 950px;
  text-align: center;
  background-color: ${(props)=> (props.bgColor)};
  margin: 0 auto 40px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px 20px 0;
`;
