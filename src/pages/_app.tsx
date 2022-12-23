import '@styles/globals.scss';
import type { AppProps } from 'next/app';

import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
