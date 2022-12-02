import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout';

export default function MyApp({ Component, pageProps })
{
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

