import styled from 'styled-components';

export default function TabContents({ activeTab, clickTab }) {
  // const Contents = ['소개', '글', '시리즈'];
  const Contents = ['소개', '글'];

  return (
    <Tabs>
      {Contents.map((el, index) => {
        return (
          <Tab key={index} isActive={el === activeTab} onClick={clickTab}>
            {el}
          </Tab>
        );
      })}
    </Tabs>
  );
}

const Tabs = styled.nav`
  display: flex;
  box-shadow: inset 0 -1px 0 rgb(230 230 230);
`;

const Tab = styled.span`
  display: block;
  margin-right: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid
    ${props => (props.isActive ? '#333' : 'rgb(230 230 230)')};
  min-width: max-content;
  color: ${props => (props.isActive ? '#333' : '#959595')};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    color: ${props => (props.isActive ? '#333' : 'rgba(117, 117, 117, 1)')};
    border-color: ${props =>
      props.isActive ? '#333' : 'rgba(117, 117, 117, 1)'};
  }
`;
