import Logo from '../Logo';
import { NavStyled } from './styles';

interface NavProps {
  children: React.ReactNode;
}

function Nav({ children }: NavProps) {
  return (
    <NavStyled>
      <Logo />
      {children}
    </NavStyled>
  );
}

export default Nav;
