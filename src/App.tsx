import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import usePersistedState from './utils/usePersistedState';
import GlobalStyle from './styles/global';
import Header from './components/header';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import AppRoutes from './utils/routes';
import { PartsProvider } from './context/partsContext';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };
  return (
    <ThemeProvider theme={theme}>
      <PartsProvider>
        <BrowserRouter>
          <div className="App">
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />
            <AppRoutes />
          </div>
        </BrowserRouter>
      </PartsProvider>
    </ThemeProvider>
  );
}

export default App;
