import styled from 'styled-components';

export const Container = styled.article`
  width: 350px;
  height: 313px;

  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const Image = styled.img`
  width: 350px;
  height: 238.35px;
  border-radius: 24px;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9.75px;
`;

export const Accommodation = styled.span`
  font-family: ${({ theme }) => theme.fonts.tag};
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textHighlighted};

  flex: 1;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMain};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
