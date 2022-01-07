import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme';
import { Nav, Footer } from './Components/Organisms';
import { HomePage } from 'Pages/HomePage/HomePage';
import { SearchProvider } from 'Context/SearchProvider';
import { Switch as Routes } from 'Routes/Routes';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <GlobalStyle />
          <Routes />
          <Wrapper>
            <Nav />
            <HomePage />
            <Footer />
          </Wrapper>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
};
