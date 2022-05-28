import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
	
	* {
    box-sizing: border-box;

    &::selection {
    /* background-color: #ff5946;
    color: white; */
    }
  }
  
  html,
  body {
    height: 100%;
    font-family: 'Noto Sans KR';
  }
	
`;

export default GlobalStyle;
