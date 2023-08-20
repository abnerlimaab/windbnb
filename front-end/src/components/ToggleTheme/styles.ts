import styled from 'styled-components';

export const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: 1px solid ${({ theme }) => theme.colors.themeButton};
    box-shadow: 0 0 8px 8px ${({ theme }) => theme.colors.shadow};
    padding: 10px;
    border-radius: 50%;
`;
