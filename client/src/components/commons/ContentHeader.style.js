import styled from "styled-components";

export const Section = styled.section`
  cursor: default;
  display: flex;
  width: 950px;
  justify-content: space-between;
  margin: 20px auto;
`;
export const Back = styled.p`
  cursor: pointer;
  margin-top: 7px;
  font-size: 18px;
  float: right;
  border-bottom: 1px solid;

  &:hover {
    opacity: 0.5;
  }
`;
