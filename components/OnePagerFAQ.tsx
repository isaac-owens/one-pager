import React from 'react';
import { Heading } from '@chakra-ui/core';

import { ContentCard } from './ContentCard';
import { OnePagerData, OnePagerQuestion } from '../model/model';
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
      {onePagerData.questions.map((question: OnePagerQuestion) => (
        <Question key={question.question} question={question}></Question>
      ))}
    </ContentCard>
  )
}

const Question = ({question}: {question: OnePagerQuestion}) => {
  return (
    <>
      <Heading as='h1' size='lg' marginRight='10px'>
        {question.question}
      </Heading>
      <SubHeading>
        {question.answer}
      </SubHeading>
    </>
  )
}

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);