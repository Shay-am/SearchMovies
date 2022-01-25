import React from 'react';
import PropTypes from 'prop-types';
import { Button, H1, Description } from 'Components/Atoms';
import {
  Wrapper,
  WrapperDescription,
  StyledDescription,
  StyledButton,
  IMG,
  WrapperImage
} from './Header.styled';
import { useHandleClickNaviagteToDetails } from 'Hooks/useHandleClickNaviagteToDetails';
import { getFullPathImage } from 'Utils/getFullPathImage';

export const Header = ({ data }) => {
  const { handleClickNavigate } = useHandleClickNaviagteToDetails(data);

  const fullPathImage = getFullPathImage(data?.poster_path);

  return (
    <>
      {data && (
        <Wrapper>
          <WrapperImage>
            <IMG src={fullPathImage} />
            <WrapperDescription>
              <H1>{data.original_title}</H1>
              <StyledButton>
                <Button onClick={() => handleClickNavigate()}>Details</Button>
              </StyledButton>
              <StyledDescription>
                <Description>{data.overview}</Description>
              </StyledDescription>
            </WrapperDescription>
          </WrapperImage>
        </Wrapper>
      )}
    </>
  );
};

Header.propTypes = {
  data: PropTypes.object
};
