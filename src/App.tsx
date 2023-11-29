import { Router } from '@solidjs/router';
import { ThemeProvider } from '@suid/material';

import { theme } from '../theme';
import { RouteWrapper } from './Routes';

function App() {
  const AppWrapper = RouteWrapper();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default App;
