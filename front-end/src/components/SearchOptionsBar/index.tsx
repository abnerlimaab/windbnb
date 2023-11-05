import { Container, Divider, OptionButton } from './styles';

interface SearchOptionsBarProps {
  children: React.ReactNode;
  onClick: () => void;
}

function SearchOptionsBar({ children, onClick }: SearchOptionsBarProps) {
  return <Container onClick={onClick}>{children}</Container>;
}
export interface SearchOptionBarButtonProps {
  children: React.ReactNode;
  active: boolean;
}

export function SearchOptionBarButton({
  active,
  children,
}: SearchOptionBarButtonProps) {
  return (
    <OptionButton active={active}>
      <span>{children}</span>
    </OptionButton>
  );
}

export function SearchOptionBarDivider() {
  return <Divider />;
}

export default SearchOptionsBar;
