import styled from 'styled-components';

export default function ArticleContent() {
  const articleData = { category: 'journal', title: '블로그 프로젝트 첫 글' };

  return (
    <ArticleWrap>
      <ArticleCategory>{articleData.category}</ArticleCategory>
      <ArticleTitle>{articleData.title}</ArticleTitle>
    </ArticleWrap>
  );
}

const ArticleWrap = styled.li`
  list-style: none;
  padding: 24px 0 27px;
  border-bottom: 1px solid #eee;
  line-height: 1.5;
`;

const ArticleCategory = styled.h1`
  display: inline-block;
  margin: 3px 0 11px;
  border-bottom: 1px solid #00c3bd;
  color: #00c3bd;
  font-size: 13px;
  line-height: 14px;
`;

const ArticleTitle = styled.h1`
  color: #333;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -1px;
  white-space: nowrap;
`;
