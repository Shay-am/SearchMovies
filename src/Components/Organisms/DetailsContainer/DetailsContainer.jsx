import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper, Heading, CardContainer, StyledButton } from './DetailsContainer.styled';
import { H3 } from 'Components/Atoms/Heading/Heading';
import { CastCard } from 'Components/Molecules/CastCard/CastCard';
import { Button } from 'Components/Atoms';

const counterToShowData = 10;

export const DetailsContainer = ({ name, data }) => {
  const [count, setCount] = useState(counterToShowData);

  const initial = data && data.filter((item) => item.profile_path).slice(0, count);

  const handleClickPagination = () => {
    setCount((prevCount) => prevCount + counterToShowData);
  };

  return (
    <Wrapper>
      <Heading>
        <H3>{name}</H3>
      </Heading>
      <CardContainer>
        {initial &&
          initial.map((item, index) => {
            return <CastCard key={index} {...item} />;
          })}
      </CardContainer>
      <StyledButton>
        <Button onClick={handleClickPagination}>Show More</Button>
      </StyledButton>
    </Wrapper>
  );
};

DetailsContainer.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any
};
