import { Span } from './styles';

interface TagProps {
  children: React.ReactNode;
}

function Tag({ children }: TagProps) {
  return <Span>{children}</Span>;
}

export default Tag;
