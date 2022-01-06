import styled, { css } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
`;
export const StyledIcon = css`
  width: 2rem;
  height: 2rem;
  font-size: 4rem;

  &:hover {
    cursor: pointer;
    transition: color 0.6s ease;
    color: red;
  }
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  ${StyledIcon}
`;

export const StyledEmailIcon = styled(EmailIcon)`
  ${StyledIcon}
`;
export const StyledLinkedInIcon = styled(LinkedInIcon)`
  ${StyledIcon}
`;

export const StyledDescription = styled.div`
  height: 3rem;
  font-size: 1.4rem;
  text-align: center;
  transform: translateY(-1rem);
`;
