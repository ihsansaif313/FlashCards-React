import { createGlobalStyle, ThemeProvider} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: ${theme.fontBody};
  background-color: ${theme.light};
  background-image: 
    radial-gradient(${theme.primary}22 1px, transparent 1px),
    radial-gradient(${theme.primary}22 1px, transparent 1px);
  background-position: 0 0, 20px 20px;
  background-size: 40px 40px;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}
    /* Smooth transitions for all interactive elements */
  a, button, .card {
    transition: 
      color ${theme.transitionFast},
      background-color ${theme.transitionFast},
      transform ${theme.transitionNormal},
      box-shadow ${theme.transitionFast};
  }

  /* Better focus states */
  *:focus {
    outline: 2px solid ${theme.accent}88;
    outline-offset: 2px;
  }
`;