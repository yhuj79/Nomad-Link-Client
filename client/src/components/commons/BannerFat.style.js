import styled from "styled-components";

export const Section = styled.section`
  cursor: default;
  width: 99vw;
  background-color: ${(props) => props.bgColor};
  background-size: 100%;
  margin: 0;
  animation: 0.7s ease-in-out loadEffect;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes loadEffect {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const Div = styled.div`
  width: 1000px;
  height: ${(props) => props.height};
  display: inline-block;
  align-items: center;
  margin: auto;
  color: ${(props) => props.color};

  h1 {
    margin: 40px 5px;
  }
  h3 {
    margin: 10px 0;
  }
`;
