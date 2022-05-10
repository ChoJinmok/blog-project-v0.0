import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Link } from '@styled-icons/entypo/Link';

export default function UserHeader() {
  return (
    <ContentHeader>
      <HeaderLeft>
        <UserPicture>
          <img alt="usePicture" src="/blog-project-v0.0/images/IMG_0735.JPG" />
        </UserPicture>
        <ArticleInfo>
          <UserNickName>나목</UserNickName>
          <CreatingTime>May 6, 2022</CreatingTime>
        </ArticleInfo>
      </HeaderLeft>
      <HeaderRight>
        <IconButton>
          <GithubIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <LinkCopyIcon />
        </IconButton>
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

const IconButton = styled.button`
  padding: unset;
  border: unset;
  width: 32px;
  height: 41px;
  background-color: unset;
  cursor: pointer;

  /* &:not(:last-child) {
    padding-right: 4px;
  } */

  &:hover {
    svg {
      fill: rgba(117, 117, 117, 1);
    }
  }
`;

const GithubIcon = styled(Github)`
  width: 20px;
  fill: rgba(168, 168, 168, 1);
`;

const InstagramIcon = styled(Instagram)`
  width: 22px;
  fill: rgba(168, 168, 168, 1);
`;

const LinkCopyIcon = styled(Link)`
  width: 19px;
  fill: rgba(168, 168, 168, 1);
`;
