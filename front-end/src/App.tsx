import { AiOutlineSearch } from 'react-icons/ai';

import Nav from './components/Nav';
import SearchOptionsBar, {
  SearchOptionBarButton,
  SearchOptionBarDivider,
} from './components/SearchOptionsBar';

function App() {
  return (
    <main>
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
            <AiOutlineSearch color="#EB5757E5" size="18px" />
          </SearchOptionBarButton>
        </SearchOptionsBar>
      </Nav>
    </main>
  );
}

export default App;
