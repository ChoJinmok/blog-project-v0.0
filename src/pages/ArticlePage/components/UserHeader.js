import styled from 'styled-components';
import {
  GithubIconButton,
  InstagramIconButton,
  LinkCopyIconButton,
} from '../../../components/IconButton/IconButton';

export default function UserHeader() {
  return (
    <ContentHeader>
      <HeaderLeft>
        <UserPicture>
          <img alt="usePicture" src="/blog-project-v0.0/images/IMG_0735.JPG" />
        </UserPicture>
        <ArticleInfo>
          <UserNickName>나목</UserNickName>
          <CreatingTime>May 21, 2022</CreatingTime>
        </ArticleInfo>
      </HeaderLeft>
      <HeaderRight>
        <GithubIconButton />
        <InstagramIconButton />
        <LinkCopyIconButton />
      </HeaderRight>
    </ContentHeader>
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
