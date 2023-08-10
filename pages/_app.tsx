
import React from 'react';
import { AppProps } from 'next/app';
import { Nunito_Sans } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'next-themes'


const GlobalStyle = createGlobalStyle`
  :root {
    --text: hsl(0, 0%, 100%);
    --bg: hsl(207, 26%, 17%);
    --secondary: hsl(209, 23%, 22%);
  }

  [data-theme="dark"] {
    --text: hsl(200, 15%, 8%);
    --bg: hsl(0, 0%, 98%);
    --secondary: hsl(0, 0%, 100%);
  }

  body {
    background: var(--bg);
    color: var(--text);
    margin: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider >
        <main className={nunitoSans.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
