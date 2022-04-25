import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export default function Nav() {
  const navData = {
    blogTitle: '적(는)자생존, 기록은 기억을 이긴다.',
    profileImgUrl: '/blog-project-v0.0/images/IMG_0735.JPG',
  };

  return (
    <Header>
      <HeaderInner>
        <BlogTitle>{navData.blogTitle}</BlogTitle>
        <HeaderUtil>
          <SearchUtil>
            <SearchBtn>
              <SearchIcon />
            </SearchBtn>
          </SearchUtil>
          <HeaderMenu>
            <img alt="pofileImg" src={navData.profileImgUrl} />
          </HeaderMenu>
        </HeaderUtil>
      </HeaderInner>
    </Header>
  );
}

const Header = styled.header`
  height: 128px;
  background-color: #f8f8f8;
`;

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
