import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6px;
`;

export const Span = styled.span`
  font-family: ${({ theme }) => theme.fonts.tag};
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMedium};
`;
