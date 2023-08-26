import Rating from '../Rating';
import Tag from '../Tag';

import { Accommodation, Container, FlexRow, Image, Title } from './styles';

interface StayCardProps {
  imageUrl: string;
  title: string;
  rating: number;
  superHost: boolean;
  accommodation: string;
}

function StayCard({
  imageUrl,
  title,
  rating,
  superHost,
  accommodation,
}: StayCardProps) {
  return (
    <Container>
      <Image src={imageUrl} alt={title} />

      <FlexRow>
        {superHost && <Tag>SUPER HOST</Tag>}

        <Accommodation>{accommodation}</Accommodation>

        <Rating value={rating} />
      </FlexRow>

      <Title>{title}</Title>
    </Container>
  );
}

export default StayCard;
