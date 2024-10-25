import React from 'react';

const CardImage = ({ src, alt }) => (
  <div className="card__image">
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

export default CardImage;
