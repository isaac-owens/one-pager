import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@chakra-ui/core';
import {Tracker } from 'react-tracker';
import { TrackerProvider } from 'react-tracker';

const tracker = new Tracker();


import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [events, setEvent] = React.useState([]);

  const handleEvent = (newEvent) => {
    setEvent(events.concat(newEvent));
  }

  const pageViewListener = (event, trackingHistory) => {
    console.log('listener trying');
  };
  
  tracker.on('PAGE_VIEW', pageViewListener);
  
  

  return (
      <ThemeProvider>
        <TrackerProvider tracker={tracker}>
            <Component {...pageProps} onEvent={handleEvent}/>
        </TrackerProvider>
      </ThemeProvider>
  );
}
