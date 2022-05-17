import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Link } from '@styled-icons/entypo/Link';

export function GithubIconButton() {
  return (
    <IconButton>
      <GithubIcon />
    </IconButton>
  );
}

export function InstagramIconButton() {
  return (
    <IconButton>
      <InstagramIcon />
    </IconButton>
  );
}

export function LinkCopyIconButton() {
  return (
    <IconButton>
      <LinkCopyIcon />
    </IconButton>
  );
}

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
