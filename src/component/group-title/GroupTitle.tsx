import React from 'react';
import './group-title.scss';

interface GroupTitleProps {
  groupKey: string;
}

const GroupTitle: React.FC<GroupTitleProps> = React.memo(({ groupKey }) => (
  <h4 className="employees-group__title">
    <span className="employees-group__title_decoration" />
    <span className="employees-group__title_span">{groupKey}</span>
    <span className="employees-group__title_decoration" />
  </h4>
));

export default GroupTitle;
