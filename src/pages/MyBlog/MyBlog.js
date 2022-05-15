import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../../components/Nav/Nav';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import TabContents from '../../components/TabContents/TabContents';
import ArticleContent from '../../components/ArticleContent/ArticleContent';
import UserIntroduce from './components/UserIntoroduce';

export default function MyBlog() {
  const [activeTab, setActiveTab] = useState('소개');

  const navigate = useNavigate();

  const goToArticlePage = id => {
    navigate(`/blog-project-v0.0/article/${id}`);
  };

  const clickTab = event => {
    setActiveTab(event.target.innerText);
  };

  return (
    <MyBlogSection>
      <Nav />
      <HeaderBg />
      <MyBlogWrap>
        <header>
          <ProfileSection />
          <TabContents activeTab={activeTab} clickTab={clickTab} />
        </header>
        <main>
          {activeTab === '글' && (
            <ul>
              <ArticleContent goToArticlePage={goToArticlePage} />
            </ul>
          )}
          {activeTab === '소개' && <UserIntroduce />}
        </main>
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
