import React from 'react';
import PropTypes from 'prop-types';
import { Card, CastImage, StyledImage, StyledDescription } from './CastCard.styled';
import { Description } from 'Components/Atoms';

import { getFullPathImage } from 'Utils/getFullPathImage';

export const CastCard = ({ name, profile_path }) => {
  const fullPathProfileImage = getFullPathImage(profile_path);

  return (
    <Card>
      <CastImage>
        <StyledImage src={fullPathProfileImage} />
      </CastImage>
      <StyledDescription>
        <Description>{name}</Description>
      </StyledDescription>
    </Card>
  );
};

CastCard.propTypes = {
  name: PropTypes.string,
  profile_path: PropTypes.string
};
