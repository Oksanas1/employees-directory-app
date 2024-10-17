import React from 'react';
import Navigation from '../navigation/Navigation';
import ReportInformation from '../report-information/ReportInformation';

const ErrorPage = () => (
  <div>
    <Navigation />
    <ReportInformation
      title="Unexpected error occurred..."
      text="Try again a bit later"
      isNeedReload={true}
      nameImage="enlo"
    />
  </div>
);

export default ErrorPage;
