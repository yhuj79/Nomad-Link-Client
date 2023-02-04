import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// styled-reset으로 스타일 초기화 세팅
export const GlobalStyle = createGlobalStyle`
  ${reset}

 * {
    margin: 0;
 }

 body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-break: keep-all;
    word-wrap: break-word;
    text-rendering: optimizeLegibility;
    background: ${({ theme }) => theme.bgIndex};
    color: ${({ theme }) => theme.textIndex};
 }
 
 h1 {
    font-weight: bold;
    font-size: 30px;
 }

 h2 {
    font-weight: bold;
    font-size: 25px;
 }

 h3 {
    font-weight: bold;
    font-size: 20px;
 }
`;
