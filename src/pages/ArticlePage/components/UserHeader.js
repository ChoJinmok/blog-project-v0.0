import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  GithubIconButton,
  InstagramIconButton,
  LinkCopyIconButton,
} from '../../../components/IconButton/IconButton';

export default function UserHeader({ publishTime }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('/blog-project-v0.0/data/userData.json')
      .then(result => result.json())
      .then(res => setUserData(res[0]));
  }, []);

  return (
    userData && (
      <ContentHeader>
        <HeaderLeft>
          <UserPicture>
            <img alt="usePicture" src={userData.profileImgUrl} />
          </UserPicture>
          <ArticleInfo>
            <UserNickName>{userData.userName}</UserNickName>
            <CreatingTime>{publishTime}</CreatingTime>
          </ArticleInfo>
        </HeaderLeft>
        <HeaderRight>
          {userData.userGithub && (
            <GithubIconButton userGithub={userData.userGithub} />
          )}
          {userData.userIstagram && (
            <InstagramIconButton userIstagram={userData.userIstagram} />
          )}
          <LinkCopyIconButton />
        </HeaderRight>
      </ContentHeader>
    )
  );
}

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 56px 2px 32px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const UserPicture = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserNickName = styled.span`
  color: rgba(41, 41, 41, 1);
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`;

const CreatingTime = styled.span`
  color: rgba(117, 117, 117, 1);
  font-size: 14px;
  line-height: 20px;
`;

const HeaderRight = styled.div``;
