
import React from 'react';
import { AppProps } from 'next/app';
import { Nunito_Sans } from "next/font/google"
import GlobalStyles from '../styles/GlobalStyles';

const nunitoSans = Nunito_Sans({
    weight: ["300", "600", "800"],
    subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={nunitoSans.className}>
            <GlobalStyles />
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
