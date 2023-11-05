import styled from 'styled-components';
import { Breakpoints } from '../../styles/theme';

export const Backdrop = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backdrop};
`;

export const Container = styled.div`
    padding: 24px 12px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.searchBar};
    font-weight: 700;
    font-size: .75rem;

    @media screen and (min-width: ${Breakpoints.sm}) {
        display: none;
    }
`;

export const HeaderCloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
`;