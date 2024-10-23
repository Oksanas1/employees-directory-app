import React from 'react';
import './group-title.scss';

type GroupTitleProps = {
  groupKey: string;
}

const GroupTitle: React.FC<GroupTitleProps> = React.memo(({ groupKey }) => (
  <h4 className="group-title">
    <span className="group-title__decoration" />
    <span className="group-title__span">{groupKey}</span>
    <span className="group-title__decoration" />
  </h4>
));

export default GroupTitle;
