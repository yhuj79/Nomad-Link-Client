import styled from "styled-components";

export const ResFooter = styled.footer`
  min-width: 1000px;
  background-color: ${({ theme }) => theme.bgFooter};
`;
export const FooterDiv = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 40px;
  opacity: 0.6;
`;
export const Information = styled.div`
  text-align: center;
  font-size: 12px;

  .react-footer-icon {
    width: 22px;
    height: 22px;
    margin: 10px;
  }
`;
export const ServiceLink = styled.div`
  font-size: 12px;

  & > p {
    margin-left: -20px;
    margin-bottom: 7px;
  }
`;
export const SvButton = styled.p`
  cursor: pointer;
`;
