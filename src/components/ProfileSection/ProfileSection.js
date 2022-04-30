import styled from 'styled-components';

export default function ProfileSection() {
  const profileData = {
    profileImgUrl: '/blog-project-v0.0/images/IMG_0735.JPG',
    userName: '나목',
    userDesc: '프론트엔드 개발자',
    followsCount: 0,
    follingsCount: 0,
  };

  return (
    <Profile>
      <ProfileImg>
        <img alt="profileImg" src={profileData.profileImgUrl} />
      </ProfileImg>
      <UserName>{profileData.userName}</UserName>
      <UserDesc>{profileData.userDesc}</UserDesc>
      <ProfileInfoFooter>
        <BlogCount>
          <Followers>
            <FollowersTiltle>구독자</FollowersTiltle>
            <FollowersCount>{profileData.followsCount}</FollowersCount>
          </Followers>
          <Followings>
            <FollowingsTiltle>관심작가</FollowingsTiltle>
            <FollowingsCount>{profileData.follingsCount}</FollowingsCount>
          </Followings>
        </BlogCount>
        <SubscribeBtn>구독하기</SubscribeBtn>
      </ProfileInfoFooter>
    </Profile>
  );
}

const Profile = styled.div`
  position: relative;
  margin: 0 0 94px;
  padding: 35px 0 0;
`;

const ProfileImg = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserName = styled.h1`
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #333;
`;

const UserDesc = styled.span`
  padding-top: 5px;
  font-size: 13px;
  line-height: 20px;
  color: #959595;
`;

const ProfileInfoFooter = styled.div`
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

const FollowersTiltle = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const FollowersCount = styled.span`
  font-weight: 300;
  font-size: 20px;
  cursor: pointer;

  &: hover {
    text-decoration: underline;
  }
`;

const Followings = styled(Followers)`
  margin: 0;
`;

const FollowingsTiltle = styled(FollowersTiltle)``;

const FollowingsCount = styled(FollowersCount)``;

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
