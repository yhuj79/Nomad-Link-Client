import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 500px;
  height: 450px;
  margin: 0 auto 150px;
  background-color: ${({ theme }) => theme.bgFooter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
`;
export const Div = styled.div`
  align-items: center;
  margin: auto;
`;
export const BoxFlex = styled.div`
  display: flex;
  justify-content: center;
`;
