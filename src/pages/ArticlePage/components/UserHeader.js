import styled from 'styled-components';

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
      <HeaderRight />
    </ContentHeader>
  );
}

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 56px 2px 32px;
`;

const HeaderRight = styled.div``;

const UserPicture = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
  overflow: hidden;

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
`;

const CreatingTime = styled.span`
  color: rgba(117, 117, 117, 1);
  font-size: 14px;
  line-height: 20px;
`;
