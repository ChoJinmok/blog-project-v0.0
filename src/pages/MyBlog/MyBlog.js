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
    <>
      <Nav />
      <MyBlogWrap>
        <ProfileSection />
        <TabContents />
        <ul>
          <ArticleContent goToArticlePage={goToArticlePage} />
        </ul>
      </MyBlogWrap>
    </>
  );
}

const MyBlogWrap = styled.div`
  margin: 0 auto;
  width: 700px;
`;
