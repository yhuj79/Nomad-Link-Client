import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  display: flex;
  justify-content: right;
  text-align: center;
  margin: 0 auto;
  padding: 10px 0;
  background-color: #574b4b;
  border-bottom: #fbf6f6;

  .react-search-param-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    z-index: 1000;
    background-color: #fff;
    color: #000;
    margin-top: 10px;
    margin-right: 10px;
    padding: 5px;
    padding-bottom: 6px;
    padding-right: 6px;
    font-size: 22px;
    opacity: 1;
  }
  .react-search-param-icon:hover {
    opacity: 0.7;
  }
`;
export const Select = styled.select`
  background-color: #392f31;
  color: #fff;
  font-size: 18px;
  border: none;
  font-weight: bold;
  width: 150px;
  height: 30px;
  margin: 10px;
  padding: 5px;
`;
export const InputSkillSet = styled.input`
  background-color: #ae9d9d;
  color: #fff;
  font-size: 18px;
  border: none;
  font-weight: bold;
  width: 200px;
  margin: 10px;
  margin-right: 0;
  padding: 5px;

  ::placeholder {
    color: #fbecec;
  }
`;