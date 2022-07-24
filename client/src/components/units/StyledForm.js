import styled from "styled-components";
import { media } from "../../style/GlobalStyles";

export const Section = styled.section`
  width: 950px;
  text-align: center;
  margin: 50px auto;
  background-color: #e7e7e7;
  border-radius: 20px;

  ${media.lessThan("tablet")`
    width: 700px;
	`}
  ${media.lessThan("mobile")`
    width: 270px;
	`}
`;
export const BoxFlex = styled.div`
  display: flex;

  ${media.lessThan("mobile")`
    display: block;
	`}
`;
export const BoxBlock = styled.div`
  margin: 10px 55px;

  ${media.lessThan("mobile")`
    margin: auto;
	`}
`;
export const Hr = styled.hr`
  margin: 25px 35px;
  border: 1px solid #000;

  ${media.lessThan("mobile")`
    margin: 20px 20px 30px;
	`}
`;
export const InputDiv = styled.div`
  text-align: center;
  margin: 10px auto;
`;
export const Title = styled.h2`
  padding: 30px;

  ${media.lessThan("mobile")`
    font-size: 18px;
	`}
`;
export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 18px;

  ${media.lessThan("mobile")`
    margin-left: 10px;
	`}
`;
export const InputS = styled.input`
  width: 350px;
  height: 30px;
  margin: auto;
  margin-bottom: 15px;
  padding-left: 10px;
  font-size: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    opacity: 0.7;
  }

  ${media.lessThan("tablet")`
    width: 250px;
	`}
  ${media.lessThan("mobile")`
    width: 220px;
	`}
`;
export const InputM = styled(InputS)`
  width: 830px;

  ${media.lessThan("tablet")`
    width: 570px;
	`}
  ${media.lessThan("mobile")`
    width: 220px;
	`}
`;
export const InputR = styled.input`
  margin: 25px;
  margin-right: 5px;

  ${media.lessThan("mobile")`
    margin: 15px 15px 5px 35px;
	`}
`;
export const InputL = styled.textarea`
  width: 830px;
  height: 200px;
  margin: auto;
  margin-bottom: 15px;
  padding-top: 10px;
  padding-left: 10px;
  font-family: "Roboto";
  font-size: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  resize: none;
  outline: none;

  ::placeholder {
    opacity: 0.7;
  }

  ${media.lessThan("tablet")`
    width: 570px;
	`}
  ${media.lessThan("mobile")`
    width: 220px;
	`}
`;
export const SendButton = styled.input`
  background-color: #000;
  color: #fff;
  margin: 30px;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 20px;
  font-size: 25px;
  font-weight: bold;
`;
export const Error = styled.p`
  color: #ff0000;
  font-weight: bold;
  @keyframes moveError {
    0% {
      transform: translateX(-1%);
    }
    20% {
      transform: translateX(1%);
    }
    40% {
      transform: translateX(-1%);
    }
    60% {
      transform: translateX(1%);
    }
    80% {
      transform: translateX(-1%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: moveError 0.5s ease-in-out;
`;
