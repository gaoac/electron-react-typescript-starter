import React from "react";

interface DetailsProps {
  title: string;
  content: string;
}

const Details: React.SFC<DetailsProps> = ({ title, content }) => {
  return (
    <div className='details'>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Details;
