import { Home } from '../components/Home';
import { Tracker } from 'react-tracker';
import { TrackerProvider } from 'react-tracker';
const tracker = new Tracker();

const pageViewListener = (event, trackingHistory) => {
  window.dataLayer.push(event);
};

tracker.on('PAGE_VIEW', pageViewListener);

const pageViewEvent = (pageId) => ({type: 'PAGE_VIEW', data: pageId});

export default function Index() {
  return (
    <TrackerProvider tracker={tracker}>
      <Home />
    </TrackerProvider>
  );
}
