import React from 'react';
import './index.scss';
import loope from '../../../../public/images/loope.png';
import enlo from '../../../../public/images/enlo.png';

type ReportInformationProps = {
  title: string;
  text: string;
  nameImage: string;
  isNeedReload: boolean;
};

const ReportInformation: React.FC<ReportInformationProps> = ({
  title,
  text,
  isNeedReload,
  nameImage,
}) => (
  <div className="report-information">
    <img
      src={'loope' === nameImage ? loope : enlo}
      alt="error"
      className="report-information__image"
    />
    <h4 className="report-information__title">{title}</h4>
    <p className="report-information__content">{text}</p>
    {isNeedReload && (
      <a href="/" className="report-information__link-reload">
        Reload page
      </a>
    )}
  </div>
);

export default ReportInformation;
