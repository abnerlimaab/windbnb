import { AiFillStar } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { Container, Span } from './styles';
import { Theme } from '../../styles/theme';

interface RatingProps {
  value: number;
}

function Rating({ value }: RatingProps) {
  const theme = useTheme() as Theme;

  return (
    <Container>
      <AiFillStar color={theme.colors.primary} />
      <Span>{value}</Span>
    </Container>
  );
}

export default Rating;
