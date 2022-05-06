import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';

export default function ArticlePage() {
  return (
    <ArticlePageWrap>
      <Nav />
      <BlogCover>
        <ArticleInfo>
          <CoverTitle>블로그 프로젝트 첫 글</CoverTitle>
          <CoverSubTitle>첫 글</CoverSubTitle>
          <WriteInfo>by 나목 ﹒ May 6 2022</WriteInfo>
        </ArticleInfo>
      </BlogCover>
    </ArticlePageWrap>
  );
}

const ArticlePageWrap = styled.div`
  position: relative;
`;

const BlogCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 27px;
  height: 450px;
  border-bottom: 1px solid #eee;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
`;

const ArticleInfo = styled.div`
  max-width: 100%;
  min-width: 0px;
  width: 900px;
`;

const DefaultText = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 2px;
  color: rgb(55, 53, 47);
  white-space: pre-wrap;
  word-break: break-word;
`;

const CoverTitle = styled(DefaultText)`
  font-weight: 700;
  line-height: 1.2;
  font-size: 40px;
`;

const CoverSubTitle = styled(DefaultText)`
  font-size: 16px;
  line-height: 1.5;
`;

const WriteInfo = styled(DefaultText)`
  margin-top: 45px;
  font-size: 16px;
  line-height: 1.5;
`;
