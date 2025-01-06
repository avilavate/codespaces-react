// AnalyticsContext.js
import React, { createContext } from 'react';
import { trackEvent, trackException } from './analytics';

export const AnalyticsContext = createContext();

const AnalyticsProvider = ({ children }) => {
  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackException }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
