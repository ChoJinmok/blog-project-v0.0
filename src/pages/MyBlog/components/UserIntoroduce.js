import styled from 'styled-components';

export default function UserIntroduce() {
  return (
    <UserIntroduceWrap>
      <IntroduceDefault>
        사회를 발전시킬 수 있는 아이디어를 가진 사람들과 함께 꿈을 실현시키고
        싶은 프론트엔드 개발자 조진목입니다.
      </IntroduceDefault>
      <IntroduceH3>Contact.</IntroduceH3>
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
