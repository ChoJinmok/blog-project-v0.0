import { createGlobalStyle } from 'styled-components';

import NotoSansKr100Woff from './noto-sans-kr-v27-latin_korean-100.woff';
import NotoSansKr100Woff2 from './noto-sans-kr-v27-latin_korean-100.woff2';
import NotoSansKr300Woff from './noto-sans-kr-v27-latin_korean-300.woff';
import NotoSansKr300Woff2 from './noto-sans-kr-v27-latin_korean-300.woff2';
import NotoSansKrRegularWoff from './noto-sans-kr-v27-latin_korean-regular.woff';
import NotoSansKrRegularWoff2 from './noto-sans-kr-v27-latin_korean-regular.woff2';
import NotoSansKr500Woff from './noto-sans-kr-v27-latin_korean-500.woff';
import NotoSansKr500Woff2 from './noto-sans-kr-v27-latin_korean-500.woff2';
import NotoSansKr700Woff from './noto-sans-kr-v27-latin_korean-700.woff';
import NotoSansKr700Woff2 from './noto-sans-kr-v27-latin_korean-700.woff2';
import NotoSansKr900Woff from './noto-sans-kr-v27-latin_korean-900.woff';
import NotoSansKr900Woff2 from './noto-sans-kr-v27-latin_korean-900.woff2';

export default createGlobalStyle`
    /* noto-sans-kr-100 - latin_korean */
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src: url('noto-sans-kr-v27-latin_korean-100.eot'); /* IE9 Compat Modes */
    src: local('Noto Sans KR'),
        url('noto-sans-kr-v27-latin_korean-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${NotoSansKr100Woff2}) format('woff2'), /* Super Modern Browsers */
        url(${NotoSansKr100Woff}) format('woff'), /* Modern Browsers */
        url('noto-sans-kr-v27-latin_korean-100.ttf') format('truetype'), /* Safari, Android, iOS */
        url('noto-sans-kr-v27-latin_korean-100.svg#NotoSansKR') format('svg'); /* Legacy iOS */
    }
    /* noto-sans-kr-300 - latin_korean */
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: url('noto-sans-kr-v27-latin_korean-300.eot'); /* IE9 Compat Modes */
    src: local('Noto Sans KR'),
        url('noto-sans-kr-v27-latin_korean-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${NotoSansKr300Woff2}) format('woff2'), /* Super Modern Browsers */
        url(${NotoSansKr300Woff}) format('woff'), /* Modern Browsers */
        url('noto-sans-kr-v27-latin_korean-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('noto-sans-kr-v27-latin_korean-300.svg#NotoSansKR') format('svg'); /* Legacy iOS */
    }
    /* noto-sans-kr-regular - latin_korean */
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url('noto-sans-kr-v27-latin_korean-regular.eot'); /* IE9 Compat Modes */
    src: local('Noto Sans KR'),
        url('./noto-sans-kr-v27-latin_korean-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${NotoSansKrRegularWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${NotoSansKrRegularWoff}) format('woff'), /* Modern Browsers */
        url('noto-sans-kr-v27-latin_korean-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('noto-sans-kr-v27-latin_korean-regular.svg#NotoSansKR') format('svg'); /* Legacy iOS */
    }
    /* noto-sans-kr-500 - latin_korean */
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url('noto-sans-kr-v27-latin_korean-500.eot'); /* IE9 Compat Modes */
    src: local('Noto Sans KR'),
        url('noto-sans-kr-v27-latin_korean-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${NotoSansKr500Woff2}) format('woff2'), /* Super Modern Browsers */
        url(${NotoSansKr500Woff}) format('woff'), /* Modern Browsers */
        url('noto-sans-kr-v27-latin_korean-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('noto-sans-kr-v27-latin_korean-500.svg#NotoSansKR') format('svg'); /* Legacy iOS */
    }
    /* noto-sans-kr-700 - latin_korean */
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url('noto-sans-kr-v27-latin_korean-700.eot'); /* IE9 Compat Modes */
    src: local('Noto Sans KR'),
        url('noto-sans-kr-v27-latin_korean-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${NotoSansKr700Woff2}) format('woff2'), /* Super Modern Browsers */
        url(${NotoSansKr700Woff}) format('woff'), /* Modern Browsers */
        url('noto-sans-kr-v27-latin_korean-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('noto-sans-kr-v27-latin_korean-700.svg#NotoSansKR') format('svg'); /* Legacy iOS */
    }
    /* noto-sans-kr-900 - latin_korean */
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src: url('noto-sans-kr-v27-latin_korean-900.eot'); /* IE9 Compat Modes */
    src: local('Noto Sans KR'),
        url('noto-sans-kr-v27-latin_korean-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${NotoSansKr900Woff2}) format('woff2'), /* Super Modern Browsers */
        url(${NotoSansKr900Woff}) format('woff'), /* Modern Browsers */
        url('noto-sans-kr-v27-latin_korean-900.ttf') format('truetype'), /* Safari, Android, iOS */
        url('noto-sans-kr-v27-latin_korean-900.svg#NotoSansKR') format('svg'); /* Legacy iOS */
    }
`;
