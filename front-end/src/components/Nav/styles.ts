import styled from 'styled-components';
import { Breakpoints } from '../../styles/theme';

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px 12px;
  
  @media screen and (min-width: ${Breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1150px;
    margin: 0 auto;
  }
`;
