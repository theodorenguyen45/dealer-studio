import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import './index.scss';

const cardsData = [
  {
    id: 1,
    title: 'Heading 1',
    image: '/assets/city.jpg',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu felis, sagittis eu leo sed, eleifend tincidunt felis. Nullam bibendum nisi dictum, ullamcorper magna a.',
    ],
  },
  {
    id: 2,
    title: 'Heading 2',
    image: '/assets/city.jpg',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu felis, sagittis eu leo sed, eleifend tincidunt felis. Nullam bibendum nisi dictum, ullamcorper magna a.',
    ],
  },
  {
    id: 3,
    title: 'Heading 3',
    image: '/assets/city.jpg',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu felis, sagittis eu leoe sed, eleifend tincidunt felis.',
      'Ut lacus enim, lobortis eu volutpat quis, tincidunt et diam. Ut elementum a magna nec tristique.',
    ],
  },
];

const CardContainer = () => {
  const [selectedCard, setSelectedCard] = useState(2);

  useEffect(() => {
    setSelectedCard(2);
  }, []);

  const handleCardClick = id => setSelectedCard(id);

  return (
    <div className="card-container">
      {cardsData.map(card => (
        <Card key={card.id} data={card} onClick={() => handleCardClick(card.id)} isSelected={selectedCard === card.id} />
      ))}
    </div>
  );
};

export default CardContainer;
