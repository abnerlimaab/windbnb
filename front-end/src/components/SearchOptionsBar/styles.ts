import styled from 'styled-components';
import { SearchOptionBarButtonProps } from '.';
import { Breakpoints } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  box-shadow: 0px 0px 4px 4px ${({ theme }) => theme.colors.shadow};

  @media screen and (min-width: ${Breakpoints.md}) {
    flex: none;
    width: 300px;
  }
`;

export const OptionButton = styled.button<SearchOptionBarButtonProps>`
  padding: 8px 16px;
  font-family: ${({ theme }) => theme.fonts.searchBar};
  color: ${({ theme, active }) =>
    active ? theme.colors.textMain : theme.colors.textSubtitle};
  background-color: transparent;
  border: none;
`;

export const Divider = styled.div`
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
