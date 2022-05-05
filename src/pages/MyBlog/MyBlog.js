import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import TabContents from '../../components/TabContents/TabContents';
import ArticleContent from '../../components/ArticleContent/ArticleContent';

export default function MyBlog() {
  return (
    <MyBlogSection>
      <Nav />
      <HeaderBg />
      <MyBlogWrap>
        <ProfileSection />
        <TabContents />
        <ArticleContent />
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
