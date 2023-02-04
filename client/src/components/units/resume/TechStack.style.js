import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  text-align: center;
  margin: auto;
`;
export const BoxSearch = styled.div`
  margin: 20px;
  margin-right: 0;
`;
export const TechSearch = styled.input`
  width: 270px;
  height: 30px;
  background-color: ${({ theme }) => theme.bgUnit};
  padding-top: 3px;
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.textOpacity};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  outline: none;
  transition: all 0.3s;
  z-index: 30;

  ::placeholder {
    color: ${({ theme }) => theme.textSection};
    opacity: 0.5;
  }
  &:focus {
    border-bottom: 2px solid #4641d9;
  }
`;
export const Result = styled.div`
  height: 130px;
  background-color: ${({ theme }) => theme.bgUnit};
  margin-top: 2px;
  padding: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
export const ResultText = styled.p`
  cursor: pointer;
  justify-content: center;
  width: 150px;
  background-color: #d6d1ff;
  color: #000;
  margin: 5px auto;
  padding: 5px;
  border-radius: 7px;

  &:hover {
    background-color: #b2adff;
  }
`;
export const BoxStack = styled.div`
  display: flex;
  width: 610px;
  height: 210px;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.bgUnit};
  border: 1px solid ${({ theme }) => theme.border};
  margin: 20px;
  padding: 19px;
  border-radius: 15px;
`;
export const TechName = styled.div`
  cursor: default;
  display: flex;
  width: 120px;
  height: 30px;
  text-align: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #C4DEFF;
  border: 1px solid #A0BAED;
  color: #221DB5;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
`;
export const DelButton = styled.span`
  cursor: pointer;
  width: 10px;
  height: 10px;
  padding: 3px;
  font-size: 12px;
  border-radius: 50%;

  &:hover {
    background-color: #8d8d8d;
  }
`;
export const Error = styled.p`
  color: #ff0000;
  font-weight: bold;
  @keyframes moveError {
    0% {
      transform: translateX(-1%);
    }
    20% {
      transform: translateX(1%);
    }
    40% {
      transform: translateX(-1%);
    }
    60% {
      transform: translateX(1%);
    }
    80% {
      transform: translateX(-1%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: moveError 0.5s ease-in-out;
`;
