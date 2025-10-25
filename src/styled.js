import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    margin: 0;
    background: #f3f4f6;
    color: #18181b;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
