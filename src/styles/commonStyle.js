import { keyframes } from 'styled-components';

export const animationUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;
