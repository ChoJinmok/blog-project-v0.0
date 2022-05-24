import { useState, useEffect } from 'react';
import styled from 'styled-components';

// import ProfileInfoFooter from './components/ProfileInfoFooter';

export default function ProfileSection() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch('/blog-project-v0.0/data/userData.json')
      .then(result => result.json())
      .then(res => setProfileData(res[0]));
  }, []);

  return (
    profileData && (
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
    )
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
