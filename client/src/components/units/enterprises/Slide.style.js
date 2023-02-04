import styled from "styled-components";

export const Section = styled.section`
  width: 950px;
  height: 300px;
  text-align: center;
  margin: 0 auto 40px;
  padding: 20px 20px 0;
`;
export const Box = styled.div`
  position: relative;
`;
export const Img = styled.img`
  width: 950px;
  height: 300px;
  opacity: 0.8;
  position: relative;
`;
export const Title = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 1500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 2px 2px 2px black;
`;
export const HashTag = styled.div`
  margin: 20px;
`;
export const MsLoading = styled.h1`
  padding: 140px;
`;
