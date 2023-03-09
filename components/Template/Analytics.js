import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';

if (process.env.RUNTIME_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useRouter().pathname;

  useEffect(() => {
    if (process.env.RUNTIME_ENV === 'production') {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.send({ hitType: 'pageview', page: pathname });
    }
  }, [pathname]);

  return null;
};

export default Analytics;
