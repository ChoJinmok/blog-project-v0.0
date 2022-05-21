import styled from 'styled-components';

import { LinkCopyIconButton } from '../../components/IconButton/IconButton';

export default function ArticleContent({ goToArticlePage }) {
  const articleData = {
    id: 1,
    category: 'journal',
    title: '블로그 프로젝트 첫 글',
    subTitile: '포기하지 않고 꾸준히 해내는 비결, 작심삼일 활용법',
    content:
      '누구나 새해 다짐을 하지만, 이를 꾸준히 해내는 경우는 거의 없다. 굳은 결심의 대부분은 작심삼일로 끝난다. 그런데 작심삼일을 역으로 이용해서 꾸준히 해내는 사람들이 있다. 이들은 장기 목표를 두고 2~3달을 떠올리지 않는다. 대신 3일만 버티자고 생각한다. 일단 3일만 버티고, 그다음 3일만 버티고, 그렇게 한 달을 채우고, 100일에 이른다.',
  };

  return (
    <ArticleWrap onClick={() => goToArticlePage(articleData.id)}>
      <PublishTime>May 21, 2022</PublishTime>
      <ArticleTitle>{articleData.title}</ArticleTitle>
      <ContentWrap>
        <SubTitle>{articleData.subTitile}</SubTitle>
        <Content>{articleData.content}</Content>
      </ContentWrap>
      <ArticleContentBottom>
        <ArticleCategoryWrap>
          <ArticleCategory>{articleData.category}</ArticleCategory>
        </ArticleCategoryWrap>
        <LinkCopyIconButton />
      </ArticleContentBottom>
    </ArticleWrap>
  );
}

const ArticleWrap = styled.li`
  list-style: none;
  padding: 24px 0 27px;
  border-bottom: 1px solid #eee;
  line-height: 1.5;
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
  max-height: 43px;
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
