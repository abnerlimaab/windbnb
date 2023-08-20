import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Button } from './styles';

interface ToggleThemeProps {
  darkMode: boolean;
  onClick: () => void;
}

function ToggleTheme({ onClick, darkMode }: ToggleThemeProps) {
  const theme = useTheme();

  return (
    <Button onClick={onClick}>
      {darkMode ? (
        <MdOutlineDarkMode size="28px" color={theme.colors.themeButton} />
      ) : (
        <MdOutlineLightMode size="28px" color={theme.colors.themeButton} />
      )}
    </Button>
  );
}

export default ToggleTheme;
