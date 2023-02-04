import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  cursor: pointer;
  width: 810px;
  height: 174px;
  text-align: center;
  margin: 0 auto 20px;
  background-color: ${({ theme }) => theme.bgButton};
  border: 1px solid ${({ theme }) => theme.textOpacity};
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.textOpacity};
  }
`;
export const BoxFlex = styled.div`
  display: flex;
  width: 500px;
  height: 174px;
  align-items: center;
  justify-content: center;
  color: #000;
`;
export const ProfileImage = styled.img`
  width: 310px;
  height: 174px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;
export const EntName = styled.p`
  font-weight: bold;
`;
export const Title = styled.h3`
  margin: 8px;
`;
