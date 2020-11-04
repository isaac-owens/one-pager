import React from 'react';

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
import { Paywall } from './Paywall';

let visitedPages = [];

const saveDataToLocalStorage = (data) => {
  let a = [];
  a = JSON.parse(localStorage.getItem('visitedPages')) || [];
  if (!a.includes(data)) {
    a.push(data);
  };
  localStorage.setItem('visitedPages', JSON.stringify(a));
}

const showPaywall = (data) => {
  if (visitedPages.length > 2 && !visitedPages.slice(0, 2).includes(data)) {
    return true;
  }
  return false;
}

/** Renders a full one pager based on the onePagerUrl. */
export const OnePager = ({ onePagerUrl }: { onePagerUrl: string }) => {
  const [onePagerData, setOnePager]: [OnePagerData, any] = React.useState(
    EMPTY_ONE_PAGER
  );
  const [isLoading, setIsLoading]: [boolean, any] = React.useState(false);

  // Load data on first render. Similar to componentDidMount
  React.useEffect(() => {
    saveDataToLocalStorage(onePagerUrl);
    visitedPages = JSON.parse(localStorage.getItem('visitedPages'));
    setIsLoading(true);
    getOnePagerData(onePagerUrl).then((result) => {
      setOnePager(result);
      setIsLoading(false);
    });
  }, [onePagerUrl]);


  return (
    <Box bg='#f2f4f5'>
      {showPaywall(onePagerUrl) ? 
      <Paywall />: 
      <Head>
        <title>{isLoading ? onePagerUrl : onePagerData.companyName}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>}


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
