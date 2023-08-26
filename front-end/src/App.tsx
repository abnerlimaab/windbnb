import { useMemo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThemeProvider } from 'styled-components';

import Nav from './components/Nav';
import SearchOptionsBar, {
  SearchOptionBarButton,
  SearchOptionBarDivider,
} from './components/SearchOptionsBar';
import ToggleTheme from './components/ToggleTheme';
import theme from './styles/theme';
import { GlobalStyle, Main } from './styles';
import StayCard from './components/StayCard';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const themeMemo = useMemo(
    () => (darkMode ? theme.dark : theme.light),
    [darkMode],
  );

  return (
    <ThemeProvider theme={themeMemo}>
      <GlobalStyle />
      <Main>
        <Nav>
          <SearchOptionsBar>
            <SearchOptionBarButton active>
              Helsinki, Finland
            </SearchOptionBarButton>

            <SearchOptionBarDivider />

            <SearchOptionBarButton active={false}>
              Add guests
            </SearchOptionBarButton>

            <SearchOptionBarDivider />

            <SearchOptionBarButton active={false}>
              <AiOutlineSearch size="18px" color={themeMemo.colors.primary} />
            </SearchOptionBarButton>
          </SearchOptionsBar>
        </Nav>

        <StayCard />

        <ToggleTheme onClick={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      </Main>
    </ThemeProvider>
  );
}

export default App;
