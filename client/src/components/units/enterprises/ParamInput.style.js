import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  display: flex;
  justify-content: right;
  text-align: center;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #574b4b;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
export const Infor = styled.h3`
  cursor: default;
  width: 570px;
  height: 45px;
  text-align: left;
  line-height: 47px;
  color: #fff;
`;
export const Select = styled.select`
  width: 150px;
  height: 30px;
  background-color: #392f31;
  color: #fff;
  margin: 10px;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
  border: none;
`;
