import styled from 'styled-components';

// const URL_Image =
//   'https://occ-0-987-990.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe_x8kd9mnjZB99_vUGkECSNmiP1VQt-eSQGMETZE0sxZBkyuwDWGjBXaa4FvO8wqZOv5rNe9Asx_8ji5OCNNZ-abbze.jpg?r=f97';
export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const WrapperDescription = styled.section`
  position: relative;

  top: -55rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin-left: 8rem;
  height: 30vh;

  @media (max-width: 380px) {
    height: 45vh;
  }
`;
export const StyledDescription = styled.div`
  width: 80%;
  padding: 0.1rem 0.4rem 0.5rem;
  transform: translateY(1rem);
`;

export const StyledButton = styled.div``;
export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(37%);
`;
