import React, { useState } from 'react';
import { CardsView } from '../CardsView/index.js';
import { ListView } from '../ListView/index.js';
import { IconSwitch } from '../IconSwitch/IconSwitch.jsx';
import classes from './Store.module.css';

export const Store = () => {
  const products = [
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'red',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'green',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'blue',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'black',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg',
    },
    {
      name: 'Nike free run',
      price: '170',
      color: 'black',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg',
    },
    {
      name: 'Nike Metcon 3',
      price: '150',
      color: 'green',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg',
    },
  ];
  const [viewOption, setViewOption] = useState('cards');
  const onIconSwitch = () => {
    setViewOption(viewOption === 'list' ? 'cards' : 'list');
  };

  return (
    <>
      <header>
        <IconSwitch icon={'view_list'} onSwitch={onIconSwitch} />
      </header>
      {viewOption === 'cards' ? (
        <CardsView cards={products}></CardsView>
      ) : (
        <ListView items={products}></ListView>
      )}
    </>
  );
};
