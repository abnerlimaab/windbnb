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
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 1rem;
  margin: 0 auto;
`;

export const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const SectionSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.span};
  font-weight: 500;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMedium};
`;

export const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
