import styled from 'styled-components';

const URL_Image =
  'https://occ-0-987-990.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe_x8kd9mnjZB99_vUGkECSNmiP1VQt-eSQGMETZE0sxZBkyuwDWGjBXaa4FvO8wqZOv5rNe9Asx_8ji5OCNNZ-abbze.jpg?r=f97';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${URL_Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  object-fit: contain;
`;

export const WrapperDescription = styled.section`
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
  transform: translateY(-1rem);
`;
