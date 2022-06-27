import styled from 'styled-components';

export default function SideMenu() {
  return <WrapSideMenu></WrapSideMenu>;
}

const WrapSideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;
  border-left: 1px solid #ddd;
  color: #333;
  background-color: #fff;
  transition: 0.3s ease-in;
  z-index: 10000;
`;
