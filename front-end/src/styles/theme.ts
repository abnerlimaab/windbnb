interface ColorScheme {
  background: string;
  themeButton: string;
  primary: string;
  primary90: string;
  border: string;
  borderTag: string;
  shadow: string;
  textMain: string;
  textBackground: string;
  textSubtitle: string;
  textMedium: string;
  textHighlighted: string;
}

interface Fonts {
  searchBar: string;
  tag: string;
  title: string;
  span: string;
}

export interface Theme {
  colors: ColorScheme;
  fonts: Fonts;
}

const lightColors: ColorScheme = {
  background: '#ffffff',
  themeButton: '#909090',
  primary: '#eb5757',
  primary90: '#eb5757e5',
  border: '#f2f2f2',
  borderTag: '#4f4f4f',
  shadow: '#f2f2f2',
  textMain: '#333333',
  textBackground: '#f2f2f2',
  textSubtitle: '#bdbdbd',
  textMedium: '#4f4f4f',
  textHighlighted: '#828282',
};

const darkColors: ColorScheme = {
  background: '#121212',
  themeButton: '#cdcdcd',
  primary: '#eb5757',
  primary90: '#eb5757e5',
  border: '#1e1e1e',
  borderTag: '#a0a0a0',
  shadow: '#1e1e1e',
  textMain: '#ffffff',
  textBackground: '#1e1e1e',
  textSubtitle: '#6e6e6e',
  textMedium: '#a0a0a0',
  textHighlighted: '#c4c4c4',
};

const fonts: Fonts = {
  searchBar: 'Mulish, sans-serif',
  tag: 'Montserrat, sans-serif',
  title: 'Montserrat, sans-serif',
  span: 'Montserrat, sans-serif',
};

const theme = {
  light: {
    colors: lightColors,
    fonts,
  } as Theme,
  dark: {
    colors: darkColors,
    fonts,
  } as Theme,
};

export default theme;
