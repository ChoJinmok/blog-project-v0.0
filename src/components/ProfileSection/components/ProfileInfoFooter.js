import styled from 'styled-components';

export default function ProfileInfoFooter({ followsCount, follingsCount }) {
  return (
    <ProfileInfoFooterWrap>
      <BlogCount>
        <Followers>
          <FollowTiltle>구독자</FollowTiltle>
          <FollowCount>{followsCount}</FollowCount>
        </Followers>
        <Followings>
          <FollowTiltle>관심작가</FollowTiltle>
          <FollowCount>{follingsCount}</FollowCount>
        </Followings>
      </BlogCount>
      <SubscribeBtn>구독하기</SubscribeBtn>
    </ProfileInfoFooterWrap>
  );
}

const ProfileInfoFooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 0 0;
`;

const BlogCount = styled.div`
  display: flex;
`;

const Followers = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  color: #959595;
  line-height: 1.5;
`;

const FollowTiltle = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const FollowCount = styled.span`
  font-weight: 300;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Followings = styled(Followers)`
  margin: 0;
`;

const SubscribeBtn = styled.button`
  all: unset;
  width: 80px;
  height: 32px;
  border: 1px solid #00c3bd;
  border-radius: 20px;
  font-size: 13px;
  line-height: 32px;
  color: #00c3bd;
  text-align: center;
  cursor: pointer;
`;
