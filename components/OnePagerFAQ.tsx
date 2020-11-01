import React from 'react';
import { Heading } from '@chakra-ui/core';


import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';
import Head from 'next/head';

type OnePagerFAQProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerFAQ = ({
  onePagerData, 
  isLoading
}: OnePagerFAQProps) => {
  return(
    <ContentCard title='Frequently Asked Questions' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        Question 1
      </Heading>
      <SubHeading>
        Answer 1
      </SubHeading>
    </ContentCard>
  )
}

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);