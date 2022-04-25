import styled from 'styled-components';

export default function ProfileSection() {
  const profileImgUrl = '/blog-project-v0.0/images/IMG_0735.JPG';

  return (
    <Profile>
      <ProfileImg>
        <img alt="profileImg" src={profileImgUrl} />
      </ProfileImg>
      <ProfileInfo>
        <UserName>{}</UserName>
        <Userdesc>{}</Userdesc>
        <ProfileInfoFooter>
          <BlogCount>
            <Followers></Followers>
            <Follings></Follings>
          </BlogCount>
        </ProfileInfoFooter>
      </ProfileInfo>
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

const ProfileInfo = styled.div``;

const UserName = styled.h1`
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #333;
`;

const Userdesc = styled.span`
  padding-top: 5px;
  font-size: 13px;
  line-height: 20px;
  color: #959595;
`;

const ProfileInfoFooter = styled.div`
  padding: 22px 0 0;
`;

const BlogCount = styled.div``;

const Followers = styled.div``;

const Follings = styled.div``;
