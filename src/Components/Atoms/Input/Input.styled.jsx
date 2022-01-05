import styled from 'styled-components';

export const InputWrapper = styled.form`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 3rem;
  width: 24rem;
  height: 3rem;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 10rem;
  height: 3rem;
  background-color: transparent;
  font-size: 1.4rem;
  padding: 0.2rem;

  &:hover {
    width: 15rem;
    transition: width 0.5s ease-in-out;
  }
`;

export const Image = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: white;
`;
