import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ValentinePage } from './components/Valentine';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Missed Valentine's Day? Get Your Surprise! 💝</title>
        <meta
          name="description"
          content="No worries! Enter your details for a chance to receive a special Valentine's surprise."
        />
        <meta name="theme-color" content="#FF4458" />
      </Helmet>
      <GlobalStyles />
      <ValentinePage />
    </ThemeProvider>
  );
}

export default App;
