import styled from "styled-components";

export const Section = styled.section`
  cursor: default;
  width: 99vw;
  background-color: ${(props) => props.bgColor};
  background-size: 100%;
  margin: 0;
  animation: 0.7s ease-in-out loadEffect;
  animation-delay: 0.2s;
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
  height: 500px;
  display: flex;
  align-items: center;
  margin: auto;
`;
export const Title = styled.div`
  width: 650px;
  height: 220px;
  color: white;

  & > .title-one,
  & > .title-two,
  & > .title-thr {
    text-align: left;
    margin: 10px 0;
    font-size: 40px;
    opacity: 0;
    animation: AppearTitle 1s;
    animation-fill-mode: forwards;
  }
  & > .title-one {
    animation-delay: 0.6s;
  }
  & > .title-two {
    animation-delay: 0.9s;
  }
  & > .title-thr {
    animation-delay: 1.3s;
  }

  @keyframes AppearTitle {
    from {
      opacity: 0;
      transform: translateX(30%);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const InforImage = styled.img`
  width: 350px;
  opacity: 0;
  animation: AppearImg 1.3s;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;

  @keyframes AppearImg {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
