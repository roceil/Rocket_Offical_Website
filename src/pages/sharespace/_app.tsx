import '@/styles/globals.css';
import 'swiper/css';
import type { AppProps } from 'next/app';

import HeaderMarquee from '@/components/HeaderMarquee';
import Banner from '../../containers/Banner';
import Footer from '../../components/Footer';

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
