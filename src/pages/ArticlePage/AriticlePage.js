import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import UserHeader from './components/UserHeader';

export default function ArticlePage() {
  return (
    <ArticlePageWrap>
      <Nav />
      <BlogCover>
        <ArticleInfo>
          <UserHeader />
          <CoverTitle>블로그 프로젝트 첫 글</CoverTitle>
          <CoverSubTitle>첫 글</CoverSubTitle>
        </ArticleInfo>
      </BlogCover>
      <ArticleMain>
        <DefaultText>rr</DefaultText>
      </ArticleMain>
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
  padding: 0 96px;
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
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
`;

const CoverSubTitle = styled(DefaultText)`
  margin-top: 5px;
  color: rgba(117, 117, 117, 1);
  font-size: 27px;
  line-height: 28px;
  letter-spacing: -0.03em;
`;

const ArticleMain = styled(ArticleInfo)`
  margin: 30px auto 0;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
`;
