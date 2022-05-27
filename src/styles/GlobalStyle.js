import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import NotoSansRegular from './fonts/Noto_Sans/NotoSans-Regular.ttf';
import NotoSansKRRegular from './fonts/Noto_Sans_KR/NotoSansKR-Regular.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "Noto Sans Regular";
      src: local("Noto Sans Regular"),
      url(${NotoSansRegular}) format('ttf');
  }

  @font-face {
      font-family: "Noto Sans KR Regular";
      src: local("Noto Sans KR Regular"),
      url(${NotoSansKRRegular}) format('otf');
  }
  
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
    font-family: 'Noto Sans KR Regular', 'Noto Sans Regular';
  }
	
`;

export default GlobalStyle;
