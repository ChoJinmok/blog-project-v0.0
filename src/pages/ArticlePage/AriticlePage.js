import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import UserHeader from './components/UserHeader';

export default function ArticlePage() {
  const [articleData, setArticleData] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/blog-project-v0.0/data/articleData.json')
      .then(result => result.json())
      .then(res =>
        setArticleData(res.filter(el => el.id === parseInt(params.id))[0])
      );
  }, [params.id]);

  return (
    <ArticlePageWrap>
      <Nav />
      <BlogCover>
        <ArticleInfo>
          <UserHeader publishTime={articleData.publishTime} />
          <CoverTitle>{articleData.title}</CoverTitle>
          <CoverSubTitle>{articleData.subTitile}</CoverSubTitle>
        </ArticleInfo>
      </BlogCover>
      <ArticleMain>
        <DefaultText>
          &nbsp;누구나 새해 다짐을 하지만, 이를 꾸준히 해내는 경우는 거의 없다.
          굳은 결심의 대부분은 작심삼일로 끝난다. 그런데 작심삼일을 역으로
          이용해서 꾸준히 해내는 사람들이 있다. 이들은 장기 목표를 두고 2~3달을
          떠올리지 않는다. 대신 3일만 버티자고 생각한다. 일단 3일만 버티고,
          그다음 3일만 버티고, 그렇게 한 달을 채우고, 100일에 이른다.
        </DefaultText>
        <DefaultText />
        <DefaultText>
          &nbsp;이 방법을 활용할 때 알아두면 좋은 것이 시간경계표다.
          시간경계표란 의미를 부여하고 새 출발을 하기 좋아 삶의 이정표가 될 수
          있는 날을 가리킨다. 새해 첫날(1), 매달 첫날(12), 매주 첫날(52),
          24절기(24), 공휴일(15), 등만 따져도 1년에 104회나 된다. 이때마다
          작심삼일을 해도 1년에 300일이 넘는다. 작심삼일만 잘해도 1년 계획을
          꾸준히 이어가는 셈이다.
        </DefaultText>
        <DefaultText />
        <DefaultText>
          &nbsp;커다란 목표가 부담스럽게 느껴진다면, 멀리 보지 말고 일단 3일만
          버텨보자. 천 리 길도 한 걸음부터라는 진리를 잊지 말자.
        </DefaultText>
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
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 291.3px;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
`;
