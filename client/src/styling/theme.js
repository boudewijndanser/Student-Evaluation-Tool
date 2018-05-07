import { MuiThemeProvider as NewMuiThemeProvider, createMuiTheme } from 'material-ui-next/styles'

export const theme = createMuiTheme(
  {
  palette: {
    primary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bef67a',
      main: '#8bc34a',
      dark: '#5a9216',
      contrastText: '#fff',
    },
  },
});