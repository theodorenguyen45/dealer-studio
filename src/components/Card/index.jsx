import React from 'react';
import Button from '@/components/Button';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardImage from './CardImage';

import './index.scss';

const Card = React.memo(({ data: { id, title, image, paragraphs }, onClick, isSelected }) => (
  <div className={`card ${isSelected ? 'card--selected' : ''}`}>
    <CardImage src={image} alt={title} />
    <CardHeader title={title} />
    <CardBody paragraphs={paragraphs} />

    <Button onClick={onClick}>Button {id}</Button>
  </div>
));

export default Card;
