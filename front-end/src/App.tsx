import { useMemo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ThemeProvider } from 'styled-components';

import Nav from './components/Nav';
import SearchOptionsBar, {
  SearchOptionBarButton,
  SearchOptionBarDivider,
} from './components/SearchOptionsBar';
import ToggleTheme from './components/ToggleTheme';
import StayCard from './components/StayCard';

import theme from './styles/theme';

import staysMock from './__mocks__/stays';

import {
  GlobalStyle,
  Main,
  Section,
  SectionContent,
  SectionHeader,
  SectionSpan,
  SectionTitle,
} from './styles';
import Filter from './components/Filter';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const themeMemo = useMemo(
    () => (darkMode ? theme.dark : theme.light),
    [darkMode],
  );

  return (
    <ThemeProvider theme={themeMemo}>
      <GlobalStyle />
      <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      <Main>
        <Nav>
          <SearchOptionsBar onClick={() => setIsFilterOpen(true)}>
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

        <Section>
          <SectionHeader>
            <SectionTitle>Stays in Finland</SectionTitle>

            <SectionSpan>{staysMock.length}+ stays</SectionSpan>
          </SectionHeader>

          <SectionContent>
            {staysMock.map((stay) => (
              <StayCard
                key={stay.title}
                imageUrl={stay.photo}
                superHost={stay.superHost}
                type={stay.type}
                rating={stay.rating}
                title={stay.title}
              />
            ))}
          </SectionContent>
        </Section>

        <ToggleTheme
          onClick={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
        />
      </Main>
    </ThemeProvider>
  );
}

export default App;
