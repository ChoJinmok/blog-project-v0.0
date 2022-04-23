import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export default function Nav() {
  const blogTitle = '적(는)자생존, 기록은 기억을 이긴다.';
  return (
    <header>
      <HeaderInner>
        <BlogTitle>{blogTitle}</BlogTitle>
        <HeaderUtil>
          <SearchUtil>
            <SearchBtn>
              <SearchIcon />
            </SearchBtn>
          </SearchUtil>
          <HeaderMenu></HeaderMenu>
        </HeaderUtil>
      </HeaderInner>
    </header>
  );
}

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1080px;
`;

const BlogTitle = styled.h1`
  padding: 23px 0;
  font-weight: 800;
  font-size: 1.75em;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #333;
`;

const HeaderUtil = styled.div`
  display: flex;
`;

const SearchUtil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const SearchBtn = styled.button`
  padding: none;
  border: none;
  background-color: unset;
  cursor: pointer;
`;

const SearchIcon = styled(Search)`
  width: 16px;
  color: #333;
`;

const HeaderMenu = styled.button`
  margin-left: 14px;
  border: none;
  border-radius: 50%;
  background-color: black;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
