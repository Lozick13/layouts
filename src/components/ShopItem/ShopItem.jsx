import React from 'react';
import classes from './ShopItem.module.css';
import { CartButton } from '../CartButton/index.js';

export const ShopItem = ({ data }) => {
  const { name, price, color, img } = data;
  return (
    <>
      <article className={classes['item']}>
        <img className={classes['item__img']} src={img} alt={`${name} picture`} />
        <h3 className={classes['item__title']}>{name}</h3>
        <span className={classes['item__color']}>{color}</span>
        <span className={classes['item__price']}>{`$ ${price}`}</span>
        <CartButton text={'add to cart'}></CartButton>
      </article>
    </>
  );
};
