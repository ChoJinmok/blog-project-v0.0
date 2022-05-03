import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import TabContents from '../../components/TabContents/TabContents';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

export default function MyBlog() {
  return (
    <>
      <Nav />
      <MyBlogWrap>
        <ProfileSection />
        <TabContents />
        <ArticleContent />
      </MyBlogWrap>
    </>
  );
}

const MyBlogWrap = styled.div`
  margin: 0 auto;
  width: 700px;
`;
