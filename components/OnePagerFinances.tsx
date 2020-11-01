import React from 'react';
import { Heading } from '@chakra-ui/core';
import { Progress } from "@chakra-ui/core";

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {
  // Format a number to include a dollar sign. This function
  // will be improved as part of task 2.
  const formatFinanceNumber = (financeNumber: number) => {
    // Regex Solution Source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    const num = financeNumber ? financeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '';
    return `$${num}`;
  };

  const calculateFundsRaised = (raised: number, goal: number) => {
    return (raised / goal) * 100;
  }

  const progress = calculateFundsRaised(onePagerData.fundsRaisedInStage, onePagerData.fundraisingStageGoal);

  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        Funding Stage: {onePagerData.fundraisingStage}
      </Heading>
      <SubHeading>
        Fundraising Details: {onePagerData.fundraisingDetails}
      </SubHeading>
      <SubHeading>
        Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
      </SubHeading>
      <SubHeading>
        Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
      </SubHeading>
      <Progress color={progress === 100 ? "green" : "red"} value={progress} />
    </ContentCard>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
