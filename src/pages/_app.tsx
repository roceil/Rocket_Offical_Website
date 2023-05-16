import '@/styles/globals.css';
import 'swiper/css';
import type { AppProps } from 'next/app';

import HeaderMarquee from '@/pages/components/HeaderMarquee';
import { Footer } from './components/Footer';
import Banner from './containers/Banner';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderMarquee />
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
