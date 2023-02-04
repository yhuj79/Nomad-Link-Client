import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  position: -webkit-fixed;
  position: fixed;
  right: 3%;
  bottom: 5%;
  z-index: 9999;
  width: 120px;
  height: 50px;
  background-color: ${({ theme }) => theme.bgButton};
  border-radius: 30px;
  border: 1px solid #a5a5a5;
  box-shadow: 2px 2px 2px #000;
  font-size: 16px;
  font-weight: bold;

  span {
    vertical-align: middle;
  }
  .react-mode-icon {
    vertical-align: middle;
    width: 20px;
    height: 20px;
    color: #292929;
  }

  &:hover {
    background-color: #b7b7b7;
  }
`;