import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme';
import { Nav, Header } from './Components/Organisms';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Nav />
          <Header />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
