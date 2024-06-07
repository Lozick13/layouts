import React from 'react';
import classes from './ShopCard.module.css';
import { CartButton } from '../CartButton/index.js';

export const ShopCard = ({ data }) => {
  const { name, price, color, img } = data;

  return (
    <>
      <article className={classes['card']}>
        <div className={classes['card__header']}>
          <h3 className={classes['card__title']}>{name}</h3>
          <span className={classes['card__color']}>{color}</span>
        </div>
        <img className={classes['card__img']} src={img} alt={`${name} picture`} />
        <div className={classes['card__footer']}>
          <span className={classes['card__price']}>{`$ ${price}`}</span>
          <CartButton text={'add to cart'}></CartButton>
        </div>
      </article>
    </>
  );
};
