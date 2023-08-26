import styled from 'styled-components';

export const Span = styled.span`
  font-family: ${({ theme }) => theme.fonts.tag};
  font-weight: 700;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.textMedium};

  border: 1px solid ${({ theme }) => theme.colors.borderTag};
  border-radius: 12px;
  padding: 6px 7.5px;
`;
