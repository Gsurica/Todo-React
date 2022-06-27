import { useState } from 'react';
import { RouterApp } from './routes'

import { ThemeProvider } from '@mui/material'
import { Light } from './shared/themes/Light'
import { Dark } from './shared/themes/Dark'

function App() {

  const [theme, setTheme] = useState<Object>(Light)

  const handleTheme = () => setTheme(theme === Light ? Dark : Light)

  return (
    <ThemeProvider theme={theme}>
      <RouterApp handleTheme={ handleTheme } />
    </ThemeProvider>
  );
}

export default App;
