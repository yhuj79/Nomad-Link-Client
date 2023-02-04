import styled from "styled-components";

export const Section = styled.section`
  cursor: default;
  width: 99vw;
  background-color: ${(props) => props.bgColor};
  margin: 0;
`;
export const Div = styled.div`
  width: 1000px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  color: #282828;
  font-size: 15px;
  font-weight: bold;

  p {
    padding: 7px;
  }
  span {
    cursor: pointer;
    height: 15px;
    margin: 3px;
    padding: 3px 7px;
    border-radius: 5px;
  }
  span:hover {
    background-color: #4641d9;
    border: 2px solid #8e89ff;
    color: #fff;
  }
`;
