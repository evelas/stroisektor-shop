import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from './Button';
import { useAddToCart } from '../customHooks';

function SearchItem({ id, name, imgLink, price }) {
  // Хук добавления в корзину
  const addToCart = useAddToCart(id, name, imgLink, price);
  return (
    <li className="header__li">
      <NavLink to={'/product/' + id}>
        <img src={imgLink} alt="img" width="52px" />
      </NavLink>
      <div className="header__add">
        <NavLink to={'/product/' + id}>
          <span>{name}</span>
        </NavLink>
        <Button className="button--add button--mini" outline onClick={addToCart.onAddProduct}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          {/* <span>Добавить</span> */}
          {addToCart.cartItems[id] && <i>{addToCart.cartItems[id].length}</i>}
        </Button>
      </div>
    </li>
  );
}

export default SearchItem;
