import React from 'react';
import classes from './ListView.module.css';
import { ShopItem } from '../ShopItem/index.js';

export const ListView = ({ items }) => {
  return (
    <>
      <section className={classes['items']}>
        {items.map((item, index) => (
          <ShopItem key={index} data={item} />
        ))}
      </section>
    </>
  );
};
