import styled from "styled-components";

export const Div = styled.div`
  cursor: pointer;
  width: 310px;
  height: 280px;
  text-align: center;
  margin: 0 auto 20px;
  background-color: ${({ theme }) => theme.bgProfile};
  border: 1px solid ${({ theme }) => theme.textOpacity};
  border-radius: 15px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.bgButton};
    color: #000;
  }
`;
export const ProfileImage = styled.img`
  width: 310px;
  height: 174px;
  margin-bottom: 6px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
export const EntName = styled.p`
  font-weight: bold;
`;
export const Title = styled.h3`
  margin: 8px;
`;
export const TechNameDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 3px 0;
`;
export const TechName = styled.span`
  text-align: center;
  margin: 0 5px;
  padding: 4px 7px;
  background-color: ${({ theme }) => theme.bgProfileHover};
  color: ${({ theme }) => theme.bgProfile};
  border-radius: 5px;
  font-size: 12px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
