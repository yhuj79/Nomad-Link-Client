import styled from "styled-components";

export const Div = styled.div`
  width: 800px;
  display: flex;
  text-align: center;
  margin: 20px auto;
  background-color: ${(props)=> (props.unitColor)};
  border: 2px solid #000;
  border-radius: 20px;
  color: ${({ theme }) => theme.textSection};
`;
export const ProfileImage = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 30px;
  margin: 20px;
`;
export const InformationDiv = styled.div`
  width: 580px;
  text-align: left;
  margin: 30px 10px;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div`
  display: flex;
`;
export const Name = styled.h1`
  font-size: 30px;
`;
export const Nation = styled.p`
  line-height: 2.5;
  margin: 0 20px;
`;
export const MoreButton = styled.button`
  float: right;
  margin: 0 20px;
  border-radius: 10px;
  border: 1px solid #D5D5D5;

  &:hover {
    background-color: #D1D1D1;
  }
`;
export const Role = styled.h2`
  font-size: 20px;
  margin: 10px 0;
`;
export const TechStackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TechName = styled.div`
  width: 77px;
  height: 20px;
  text-align: center;
  margin: 3px;
  background-color: #FFFFD2;
  border: 1px solid #FAF4C0;
  border-radius: 5px;
`;
