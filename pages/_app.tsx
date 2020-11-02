import { AppProps } from 'next/app';
import { ThemeProvider } from '@chakra-ui/core';
import {Tracker } from 'react-tracker';
import { TrackerProvider } from 'react-tracker';

const tracker = new Tracker();

const pageViewListener = (event, trackingHistory) => {
  window.dataLayer.push(event);
};

tracker.on('PAGE_VIEW', pageViewListener);

import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider>
        <TrackerProvider tracker={tracker}>
            <Component {...pageProps} />
        </TrackerProvider>
      </ThemeProvider>
  );
}
