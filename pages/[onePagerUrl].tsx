import React from 'react';
import { ONE_PAGERS_PUBLIC_DATA_ARRAY } from '../data/onepagers';
import OnePager from '../components/OnePager';
import { OnePagerPublicData } from '../model/model';

type OnePagerPageData = {
  onePagerUrl: string;
  onEvent;
};

/** Render a One Pager Page. */
export default function OnePagerPage({ onePagerUrl, onEvent }: OnePagerPageData) {

  return <OnePager onePagerUrl={onePagerUrl} onEvent={onEvent}></OnePager>;
}

export async function getStaticPaths() {
  const paths = ONE_PAGERS_PUBLIC_DATA_ARRAY.map(
    (onePager: OnePagerPublicData) => {
      return {
        params: {
          onePagerUrl: onePager.url,
        },
      };
    }
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      onePagerUrl: params.onePagerUrl,
    },
  };
}
