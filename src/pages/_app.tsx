import '@/styles/globals.css';
import 'swiper/css';
import type { AppProps } from 'next/app';

import HeaderMarquee from '@/components/HeaderMarquee';
import Footer from '@/components/Footer';
import Banner from '@/containers/Banner';

import ScrollToTop  from '../components/ScrollToTop';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderMarquee />
      <ScrollToTop />
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
