import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme';
import { Nav, Footer } from './Components/Organisms';
import { SearchProvider } from 'Context/SearchProvider';
import { Switch as Routes } from 'Routes/Routes';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <GlobalStyle />
          <Nav />
          <Routes />
          <Footer />
        </SearchProvider>
      </ThemeProvider>
    </>
  );
};
