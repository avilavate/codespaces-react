// analytics.js
//import ReactGA from 'ga-4-react';
import ReactGA from 'react-ga4';

const initializeAnalytics = (measurementId) => {
  ReactGA.initialize(measurementId,{debug:true});
  ReactGA.initialize
};

const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

const trackEvent = ({ category, action, label, value }) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

const trackException = (description, fatal = false) => {
  ReactGA.exception({
    description,
    fatal,
  });
};

export { initializeAnalytics, trackPageView, trackEvent, trackException };
