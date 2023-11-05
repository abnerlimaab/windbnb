import styled from 'styled-components';
import { Breakpoints } from '../../styles/theme';

export const Image = styled.img`
  width: 96px;
  height: 20px;
  align-self: flex-start;

  @media screen and (min-width: ${Breakpoints.md}) {
    margin-top: -8px;
    align-self: center;
  }
`;
