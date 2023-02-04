// Button 스타일 지정

import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 60px;
  background-color: #4641d9;
  color: #fff;
  margin: 30px;
  padding: 15px;
  border: 2px solid #8e89ff;
  border-radius: 20px;
  font-size: 22px;
  font-weight: bold;

  &:hover {
    background-color: #8e89ff;
    color: #000;
  }
`;
export const ButtonInput = styled.input`
  cursor: pointer;
  width: 120px;
  height: 60px;
  background-color: #4641d9;
  color: #fff;
  margin: 30px;
  padding: 15px;
  border: 2px solid #8e89ff;
  border-radius: 20px;
  font-size: 22px;
  font-weight: bold;

  &:hover {
    background-color: #8e89ff;
    color: #000;
  }
`;
export const ButtonMini = styled.button`
  cursor: pointer;
  width: 70px;
  height: 30px;
  background-color: #4641d9;
  color: #fff;
  margin: 3px;
  border-radius: 20px;
  border: 2px solid #8e89ff;
  font-size: 12px;

  &:hover {
    background-color: #8e89ff;
    color: #000;
  }
`;
