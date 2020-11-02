import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import {Tracker } from 'react-tracker';
import { TrackerProvider } from 'react-tracker';

const tracker = new Tracker();


import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {

  const pageViewListener = (event, trackingHistory) => {
    console.log(event);
  };
  
  tracker.on('PAGE_VIEW', pageViewListener);
  
  

  return (
      <ThemeProvider>
        <TrackerProvider tracker={tracker}>
            <Component {...pageProps} />
        </TrackerProvider>
      </ThemeProvider>
  );
}
