import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Nav from '../../components/Nav/Nav';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import TabContents from '../../components/TabContents/TabContents';
import ArticleContent from '../../components/ArticleContent/ArticleContent';
import UserIntroduce from './components/UserIntoroduce';

export default function MyBlog() {
  const [activeTab, setActiveTab] = useState('소개');
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    fetch('/blog-project-v0.0/data/articleData.json')
      .then(result => result.json())
      .then(res => setArticleData(res));
  }, []);

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
        </header>
        <main>
          <TabContents activeTab={activeTab} clickTab={clickTab} />
          {activeTab === '글' && (
            <ul>
              {articleData.map(data => {
                return <ArticleContent key={data.id} articleData={data} />;
              })}
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
