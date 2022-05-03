import styled from 'styled-components';

export default function ArticleContent() {
  const articleData = {
    category: 'journal',
    title: '블로그 프로젝트 첫 글',
    subTitile: '첫 글',
    content:
      '작년 봄에 진행했었던 "도메인 주도 설계" 스터디를 올해도 진행합니다. 함께 하실 분을 모집합니다.   도메인 주도 설계 전술적 패턴 "도메인 주도 설계"는 크게 "전략적 설계 패턴"과 "전술적 설계 패턴" 으로 구분됩니다. 저희 스터디는 전술적 설계 패턴의 일부분만 공부하며, "전략적 패턴"에 대해서는 다루지 않습니다. 일반적으로 "전술적 패턴"의 일부',
  };

  return (
    <ArticleWrap>
      <ArticleCategory>{articleData.category}</ArticleCategory>
      <ArticleTitle>{articleData.title}</ArticleTitle>
      <ContentWrap>
        <SubTitle>{articleData.subTitile}</SubTitle>
        <Content>{articleData.content}</Content>
      </ContentWrap>
      <PublishTime>May 4, 2022</PublishTime>
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

const PublishTime = styled.span`
  color: #959595;
  font-size: 12px;
  line-height: 1.5;
`;
