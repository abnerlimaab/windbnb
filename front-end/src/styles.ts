import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0;
    padding: 0;
  }
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
`;
