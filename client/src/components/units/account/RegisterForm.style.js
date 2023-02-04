import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 500px;
  height: 800px;
  vertical-align: middle;
  margin: 0 auto 150px;
  background-color: ${({ theme }) => theme.bgFooter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
`;
export const Form = styled.form`
  width: 360px;
  align-items: center;
  margin: auto;
`;
export const OptionDiv = styled.div`
  width: 160px;
  margin-right: 60px;
`;
