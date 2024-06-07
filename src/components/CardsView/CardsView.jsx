import React from 'react';
import { ShopCard } from '../ShopCard/ShopCard.jsx';
import classes from './CardsView.module.css';

export const CardsView = ({ cards }) => {
  return (
    <>
      <section className={classes['cards']}>
        {cards.map((card, index) => (
          <ShopCard key={index} data={card} />
        ))}
      </section>
    </>
  );
};
