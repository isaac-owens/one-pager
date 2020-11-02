import React from 'react';

import { withTracking } from 'react-tracker';

import Head from 'next/head';
import Link from 'next/link';
import { Box, Flex, Divider } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { getOnePagerData } from '../data/dataService';
import { EMPTY_ONE_PAGER } from '../data/onepagers';
import { ContentCard } from './ContentCard';
import { Header } from './Header';
import { OnePagerOverview } from './OnePagerOverview';
import { OnePagerFounders } from './OnePagerFounders';
import { OnePagerFinances } from './OnePagerFinances';
import { OnePagerVideo } from './OnePagerVideo';
import { OnePagerFAQ } from './OnePagerFAQ';

// Returns page view event object
const pageViewEvent = (pageId) => ({ type: 'PAGE_VIEW', data: pageId });

const saveDataToLocalStorage = (data) => {
  let a = [];
  a = JSON.parse(localStorage.getItem('visitedPages')) || [];
  a.push(data);
  localStorage.setItem('visitedPages', JSON.stringify(a));
}

/** Renders a full one pager based on the onePagerUrl. */
const OnePager = ({ onePagerUrl, trackPageView, onEvent }: { onePagerUrl: string, trackPageView, onEvent }) => {
  const [onePagerData, setOnePager]: [OnePagerData, any] = React.useState(
    EMPTY_ONE_PAGER
  );
  const [isLoading, setIsLoading]: [boolean, any] = React.useState(false);

  // Load data on first render. Similar to componentDidMount
  React.useEffect(() => {
    setIsLoading(true);
    getOnePagerData(onePagerUrl).then((result) => {
      setOnePager(result);
      setIsLoading(false);
      trackPageView(onePagerUrl);
      onEvent(onePagerUrl);
      saveDataToLocalStorage(onePagerUrl);
    });
  }, [onePagerUrl]);


  return (
    <Box bg='#f2f4f5'>
      <Head>
        <title>{isLoading ? onePagerUrl : onePagerData.companyName}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <OnePagerOverview onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerFounders onePagerData={onePagerData} isLoading={isLoading} />

      <Diveder50 />

      <OnePagerFinances onePagerData={onePagerData} isLoading={isLoading} />
      
      {
        // Check if video link exists
        onePagerData.pitchVideoLink ? "" :
        <>
          <Diveder50 />

          <OnePagerVideo onePagerData={onePagerData} isLoading={isLoading} />
        </>
      }

      <Diveder50 />

      <OnePagerFAQ onePagerData={onePagerData} isLoading={isLoading}/>
      
      <Diveder50 />

      <ContentCard isLoading={false}>
        <Flex justifyContent='center'>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </Flex>
      </ContentCard>
      <Box h='20'></Box>
    </Box>
  );
};

const Diveder50 = () => <Divider width='50%' />;

const mapTrackingToProps = trackEvent => ({ trackPageView: (pageId) => trackEvent(pageViewEvent(pageId))});

// export default OnePager;
export default withTracking(mapTrackingToProps)(OnePager);
