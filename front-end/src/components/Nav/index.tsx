import Logo from '../Logo';

interface NavProps {
  children: React.ReactNode;
}

function Nav({ children }: NavProps) {
  return (
    <nav className="flex flex-col items-center flex-wrap py-5 px-3 gap-y-10">
      <Logo />
      {children}
    </nav>
  );
}

export default Nav;
