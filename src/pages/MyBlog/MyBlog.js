import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../../components/Nav/Nav';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import TabContents from '../../components/TabContents/TabContents';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

export default function MyBlog() {
  const navigate = useNavigate();

  const goToArticlePage = id => {
    navigate(`/blog-project-v0.0/article/${id}`);
  };

  return (
    <MyBlogSection>
      <Nav />
      <HeaderBg />
      <MyBlogWrap>
        <ProfileSection />
        <TabContents />
        <ul>
          <ArticleContent goToArticlePage={goToArticlePage} />
        </ul>
      </MyBlogWrap>
    </MyBlogSection>
  );
}

const MyBlogSection = styled.div`
  position: relative;
`;

const HeaderBg = styled.div`
  height: 128px;
  background-color: #f8f8f8;
`;

const MyBlogWrap = styled.div`
  margin: 0 auto;
  width: 700px;
`;
