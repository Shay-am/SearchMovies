import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Input } from './Components/Atoms/Input/Input';
import { GlobalStyle, theme } from './Theme';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Input />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
