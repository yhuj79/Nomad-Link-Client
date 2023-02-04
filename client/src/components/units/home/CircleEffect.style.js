import styled from "styled-components";

export const Section = styled.section`
  width: 99vw;
  height: 500px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-shadow: 3px 3px 3px ${({ theme }) => theme.textOpacity};

  h1 {
    font-size: 35px;
    margin: -20px 0 20px;
  }

  animation: 0.7s ease-in-out loadEffect;
  animation-delay: 0.3s;
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
export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    border-radius: 70%;
    animation: animate 25s linear infinite;
    bottom: 0;
  }

  li.blue {
    background: rgba(35, 104, 197, 0.3);
  }
  li.red {
    background: rgba(249, 82, 81, 0.7);
  }
  li.green {
    background: rgba(79, 189, 134, 0.6);
  }
  li.yellow {
    background: rgba(251, 192, 45, 0.8);
  }
  li.lightgreen {
    background: rgba(116, 192, 45, 0.6);
  }
  li.sky {
    background: rgba(110, 227, 247, 0.6);
  }
  li.darksky {
    background: rgba(103, 153, 255, 0.5);
  }
  li.pink {
    background: rgba(255, 178, 217, 0.7);
  }

  li:nth-child(1) {
    left: 30%;
    width: 120px;
    height: 120px;
    animation-duration: 7.5s;
  }
  li:nth-child(2) {
    left: -3%;
    width: 195px;
    height: 195px;
    animation-duration: 8.25s;
  }
  li:nth-child(3) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-duration: 3.5s;
  }
  li:nth-child(4) {
    left: 70%;
    width: 100px;
    height: 100px;
    animation-duration: 4s;
  }
  li:nth-child(5) {
    left: 60%;
    width: 90px;
    height: 90px;
    animation-duration: 3.75s;
  }
  li:nth-child(6) {
    left: 80%;
    width: 80px;
    height: 80px;
    animation-duration: 5.5s;
  }
  li:nth-child(7) {
    left: 90%;
    width: 210px;
    height: 210px;
    animation-duration: 6s;
  }
  li:nth-child(8) {
    left: 20%;
    width: 250px;
    height: 250px;
    animation-duration: 6.5s;
  }
  li:nth-child(9) {
    left: 40%;
    width: 135px;
    height: 135px;
    animation-duration: 5.75s;
  }
  li:nth-child(10) {
    left: 97%;
    width: 145px;
    height: 145px;
    animation-duration: 7s;
  }
  li:nth-child(11) {
    left: 55%;
    width: 115px;
    height: 115px;
    animation-duration: 11.5s;
  }
  li:nth-child(12) {
    left: 65%;
    width: 130px;
    height: 130px;
    animation-duration: 8.5s;
  }
  li:nth-child(13) {
    left: 25%;
    width: 125px;
    height: 125px;
    animation-duration: 5s;
  }
  li:nth-child(14) {
    left: 10%;
    width: 140px;
    height: 140px;
    animation-duration: 5.25s;
  }
  li:nth-child(15) {
    left: 75%;
    width: 210px;
    height: 210px;
    animation-duration: 4.5s;
  }
  li:nth-child(16) {
    left: 50%;
    width: 200px;
    height: 200px;
    animation-duration: 6.25s;
  }
  li:nth-child(17) {
    left: 5%;
    width: 220px;
    height: 220px;
    animation-duration: 9.5s;
  }
  li:nth-child(18) {
    left: 45%;
    width: 230px;
    height: 230px;
    animation-duration: 8s;
  }
  li:nth-child(19) {
    left: 85%;
    width: 190px;
    height: 190px;
    animation-duration: 10s;
  }
  li:nth-child(20) {
    left: 15%;
    width: 110px;
    height: 110px;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(250px) rotate(0deg);
    }
    100% {
      transform: translateY(-80vh) rotate(720deg);
    }
  }
`;
