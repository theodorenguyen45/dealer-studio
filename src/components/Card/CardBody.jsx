import React from 'react';

const CardBody = ({ paragraphs }) => (
  <div className="card__body">
    {paragraphs.map((text, index) => (
      <p key={index}>{text}</p>
    ))}
  </div>
);

export default CardBody;
