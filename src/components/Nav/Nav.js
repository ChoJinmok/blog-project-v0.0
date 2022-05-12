import { useState } from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export default function Nav() {
  const [activeSearchBar, setActiveSearchBar] = useState(false);

  const clickSearch = () => {
    setActiveSearchBar(true);
  };

  const mouseLeaveHeader = () => {
    setActiveSearchBar(false);
  };

  const navData = {
    blogTitle: '적(는)자생존, 기록은 기억을 이긴다.',
    profileImgUrl: '/blog-project-v0.0/images/IMG_0735.JPG',
  };

  return (
    <HeaderInner onMouseLeave={mouseLeaveHeader}>
      <BlogTitle>{navData.blogTitle}</BlogTitle>
      <HeaderUtil>
        <SearchUtil active={activeSearchBar} onClick={clickSearch}>
          <SearchInput
            type="text"
            placeholder="검색내용을 입력하세요."
            active={activeSearchBar}
          />
          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </SearchUtil>
        <HeaderMenu>
          <img alt="pofileImg" src={navData.profileImgUrl} />
        </HeaderMenu>
      </HeaderUtil>
    </HeaderInner>
  );
}

const HeaderInner = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1080px;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 16px;
  width: ${props => (props.active ? '200px' : '32px')};
  height: 32px;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 5px 25px 5px 15px;
  border: 0;
  background-color: transparent;
  font-size: 0.875em;
  line-height: 1;
  outline: none;
`;

const SearchBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  z-index: 10;
  padding: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const SearchIcon = styled(Search)`
  width: 16px;
  color: #333;
`;

const HeaderMenu = styled.button`
  all: unset;
  margin-left: 14px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
