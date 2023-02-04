// 페이지 스타일 지정

import styled from "styled-components";
import { motion } from "framer-motion";

export const MainWide = styled(motion.main)`
  min-height: 65vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
`;
export const Main = styled(MainWide)`
  width: 1000px;
`;