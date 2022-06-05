import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LinkCopyIconButton } from '../../components/IconButton/IconButton';
import { animationUp } from '../../styles/commonStyle';

export default function ArticleContent({ articleData }) {
  const navigate = useNavigate();

  const goToArticlePage = () => {
    navigate(`/blog-project-v0.0/article/${articleData.id}`);
  };

  return (
    <ArticleWrap>
      <ArticleContentTop onClick={goToArticlePage}>
        <PublishTime>{articleData.publishTime}</PublishTime>
        <ArticleTitle>{articleData.title}</ArticleTitle>
        <ContentWrap>
          <SubTitle>{articleData.subTitile}</SubTitle>
          <Content>{articleData.content}</Content>
        </ContentWrap>
      </ArticleContentTop>
      <ArticleContentBottom>
        <ArticleCategoryWrap>
          {articleData.tags.map((tag, index) => {
            return <ArticleCategory key={index}>{tag}</ArticleCategory>;
          })}
        </ArticleCategoryWrap>
        <LinkCopyIconButton
          url={`${window.document.location.href}article/${articleData.id}`}
        />
      </ArticleContentBottom>
    </ArticleWrap>
  );
}

const ArticleWrap = styled.li`
  list-style: none;
  padding: 24px 0 27px;
  border-bottom: 1px solid #eee;
  line-height: 1.5;
  animation: ${animationUp} 0.2s;
`;

const ArticleContentTop = styled.div`
  cursor: pointer;
`;

const PublishTime = styled.span`
  color: #959595;
  font-size: 12px;
  line-height: 1.5;
`;

const ArticleTitle = styled.h1`
  color: #333;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -1px;
  white-space: nowrap;
`;

const ContentWrap = styled.div`
  display: -webkit-box;
  padding-top: 6px;
  margin-bottom: 21px;
  max-height: 45px;
  color: #666;
  font-size: 14px;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const SubTitle = styled.em`
  margin-right: 3px;
  padding-right: 3px;
  border-right: 1px solid #eee;
`;

const Content = styled.p`
  display: inline;
  color: #959595;
  word-break: break-all;
  word-wrap: break-word;
`;

const ArticleContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArticleCategoryWrap = styled.div``;

const ArticleCategory = styled.div`
  margin-right: 8px;
  padding: 2px 8px;
  border-radius: 100px;
  color: #333;
  background-color: rgba(242, 242, 242, 1);
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  word-break: break-word;

  &:hover {
    background-color: rgba(230, 230, 230, 1);
  }
`;
