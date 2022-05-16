import styled from 'styled-components';

export default function UserIntroduce() {
  return (
    <UserIntroduceWrap>
      <IntroduceDefault>
        사회를 발전시킬 수 있는 아이디어를 가진{' '}
        <IntroduceBold>
          사람들과 함께 꿈을 실현시키고 싶은 프론트엔드 개발자 조진목
        </IntroduceBold>
        입니다.
      </IntroduceDefault>
      <IntroduceH3>Contact.</IntroduceH3>
      <IntroduceDefault>
        Email. <IntroduceBold>jjmok1127@gmail.com</IntroduceBold>
      </IntroduceDefault>
      <IntroduceH3>Channel.</IntroduceH3>
      <IntroduceDefault>
        GitHub. <IntroduceBold>https://github.com/ChoJinmok</IntroduceBold>
      </IntroduceDefault>
      <IntroduceH3>Introduce.</IntroduceH3>
      <IntroduceDefault>
        <IntroduceBold>
          문제를 만나면 집요하게 파고들어 해결하는 것을 좋아합니다.
        </IntroduceBold>{' '}
        개발 경력에 비해 비교적 빠르게 성장했다고 생각하는데 개발을 하며 부딪힌
        문제들을 끝까지 해결해내려 했기 때문이라 생각합니다.
      </IntroduceDefault>
    </UserIntroduceWrap>
  );
}

const UserIntroduceWrap = styled.div`
  padding-top: 34px;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`;

const IntroduceDefault = styled.div`
  margin-top: 1px;
  margin-bottom: 1px;
  padding: 3px 2px;
  color: #666;
  font-weight: 200;
  font-size: 13px;
  line-height: 24px;
  white-space: pre-wrap;
  word-break: break-word;
`;

const IntroduceH3 = styled(IntroduceDefault)`
  margin-top: 1em;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`;

const IntroduceBold = styled.span`
  font-weight: 400;
`;
