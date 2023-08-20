interface ColorScheme {
  background: string;
  themeButton: string;
  primary: string;
  primary90: string;
  border: string;
  shadow: string;
  textMain: string;
  textBackground: string;
  textSubtitle: string;
  textMedium: string;
  textHighlighted: string;
}

const lightColors: ColorScheme = {
  background: '#ffffff',
  themeButton: '#909090',
  primary: '#eb5757',
  primary90: '#eb5757e5',
  border: '#f2f2f2',
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
  shadow: '#1e1e1e',
  textMain: '#ffffff',
  textBackground: '#1e1e1e',
  textSubtitle: '#6e6e6e',
  textMedium: '#a0a0a0',
  textHighlighted: '#c4c4c4',
};

const fonts = {
  searchBar: 'Mulish, sans-serif',
};

const theme = {
  light: {
    colors: lightColors,
    fonts,
  },
  dark: {
    colors: darkColors,
    fonts,
  },
};

export default theme;
