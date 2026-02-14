import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ValentinePage } from './components/Valentine';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Valentine's Redemption - See Real Valentine Stats by Country 💘</title>
        <meta
          name="description"
          content="Did your country win Valentine's this year… or lose badly? 👀 See real Valentine statistics by country and university. Join before access closes!"
        />
        <meta name="theme-color" content="#FF4458" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://valentine-files.vercel.app/" />
        <meta property="og:site_name" content="Valentine's Redemption" />
        <meta property="og:title" content="Valentine's Redemption - See Real Valentine Stats by Country 💘" />
        <meta property="og:description" content="Did your country win Valentine's this year… or lose badly? 👀 See real Valentine statistics by country and university. Join before access closes!" />
        <meta property="og:image" content="https://valentine-files.vercel.app/og-image.png" />
        <meta property="og:image:secure_url" content="https://valentine-files.vercel.app/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Valentine's Redemption - No Valentines? Don't worry, fill in the form below!" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://valentine-files.vercel.app/" />
        <meta name="twitter:title" content="Valentine's Redemption - See Real Valentine Stats by Country 💘" />
        <meta name="twitter:description" content="Did your country win Valentine's this year… or lose badly? 👀 See real Valentine statistics by country and university. Join before access closes!" />
        <meta name="twitter:image" content="https://valentine-files.vercel.app/og-image.png" />
      </Helmet>
      <GlobalStyles />
      <ValentinePage />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
