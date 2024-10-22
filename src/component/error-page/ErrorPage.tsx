import React from 'react';
import ReportInformation from '../report-information/ReportInformation';
import './error-page.scss';

const ErrorPage = () => (
  <div className='error-page'>
    <ReportInformation
      title="Unexpected error occurred..."
      text="Try again a bit later"
      isNeedReload={true}
      nameImage="enlo"
    />
  </div>
);

export default ErrorPage;
