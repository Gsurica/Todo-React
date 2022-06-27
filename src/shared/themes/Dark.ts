import { createTheme } from '@mui/material'
import { grey, pink } from '@mui/material/colors'

export const Dark = createTheme({
  palette: {
    primary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: "ffffff"
    },

    secondary: {
      main: pink[700],
      dark: pink[800],
      light: pink[500],
      contrastText: "ffffff"
    },

    background: {
      default: "f7f6f3",
      paper: "ffffff",
    }
  }
});
