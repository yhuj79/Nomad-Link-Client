// Form 스타일 지정

import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  text-align: center;
  margin: 50px auto;
  background-color: ${({ theme }) => theme.bgForm};
  border-radius: 20px;
`;
export const BoxFlex = styled.div`
  display: flex;
`;
export const BoxBlock = styled.div`
  margin: 10px 55px;
`;
export const BoxSelect = styled.div`
  margin-right: 22px;
`;
export const InputDiv = styled.div`
  text-align: center;
  margin: 10px auto;
`;
export const Title = styled.h2`
  padding: 30px;
`;
export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 10px;
  font-size: 18px;
`;
export const InputS = styled.input`
  width: 350px;
  height: 30px;
  background-color: ${({ theme }) => theme.bgUnit};
  margin: auto;
  margin-bottom: 15px;
  padding-top: 3px;
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.textOpacity};
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;

  ::placeholder {
    color: ${({ theme }) => theme.textSection};
    opacity: 0.5;
  }
  &:focus {
    border-bottom: 2px solid #4641d9;
  }
`;
export const Select = styled.select`
  width: 150px;
  height: 36px;
  background-color: ${({ theme }) => theme.bgUnit};
  padding-left: 10px;
  font-size: 15px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.textOpacity};
  border-radius: 4px;
  outline: 0;
  transition: all 0.3s;
  
  &:focus {
    border-bottom: 2px solid #4641d9;
  }
`;
export const InputM = styled(InputS)`
  width: 830px;
`;
export const InputR = styled.input`
  margin: 25px;
  margin-right: 5px;
`;
export const InputL = styled.textarea`
  width: 830px;
  height: 200px;
  background-color: ${({ theme }) => theme.bgUnit};
  margin: auto;
  margin-bottom: 15px;
  padding-top: 7px;
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.textOpacity};
  border-radius: 4px;
  outline: none;
  resize: none;
  transition: all 0.3s;

  ::placeholder {
    color: ${({ theme }) => theme.textSection};
    opacity: 0.5;
  }
  &:focus {
    border-bottom: 2px solid #4641d9;
  }
`;
export const ErrDiv = styled.div`
  height: 16px;
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
