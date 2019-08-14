import React from 'react';
import { connect } from 'dva';

interface DetailsProps {
  title: string;
  content: string;
}

const Details: React.SFC<DetailsProps> = ({ title, content }): React.ReactElement => (
  <div className="details">
    <p>{title}</p>
    <p>{content}</p>
  </div>
);

export default connect(({ global }) => ({
  title: global.title,
  content: global.content,
}))(Details);
