import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import HeaderMarquee from '@/components/HeaderMarquee';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderMarquee />
      <Component {...pageProps} />
    </>
  );
}
