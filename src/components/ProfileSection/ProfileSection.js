import styled from 'styled-components';

// import ProfileInfoFooter from './components/ProfileInfoFooter';

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
      {/* <ProfileInfoFooter
        followsCount={profileData.followsCount}
        follingsCount={profileData.follingsCount}
      /> */}
    </Profile>
  );
}

const Profile = styled.div`
  position: relative;
  width: 700px;
  margin: 0 auto;
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
