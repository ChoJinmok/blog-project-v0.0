import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export default function Nav() {
  const [navData, setNavData] = useState(null);
  const [activeSearchBar, setActiveSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('/blog-project-v0.0/data/userData.json')
      .then(result => result.json())
      .then(res => setNavData(res[0]));
  }, []);

  const clickSearch = () => {
    setActiveSearchBar(true);
  };

  const mouseLeaveHeader = () => {
    setActiveSearchBar(false);
    setSearchValue('');
  };

  const handleSearchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    navData && (
      <HeaderInner onMouseLeave={mouseLeaveHeader}>
        <Link to="/blog-project-v0.0/">
          <BlogTitle>{navData.blogTitle}</BlogTitle>
        </Link>
        <HeaderUtil>
          <SearchUtil active={activeSearchBar} onClick={clickSearch}>
            <SearchInput
              type="text"
              placeholder="검색내용을 입력하세요."
              // active={activeSearchBar}
              value={searchValue}
              onChange={handleSearchInput}
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
    )
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

  a {
    text-decoration: none;
  }
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
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  margin: 0;
  padding: 0;
  width: 30px;
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
