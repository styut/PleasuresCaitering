import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { menu } from '../data/menu';
import '../style/menu.css';

export const Menu = () => {
  return <div className="menu-container">
    <h1 className="menu-title">Menu:</h1>
    <ul id="picturesMenu" className="menu-list">
      {menu.map(dish =>
        <li key={dish.category} className="menu-item">
          <Link to={dish.category}>{dish.category}<img src={dish.img} width={200} height={160} /></Link>
        </li>
      )}
    </ul>
    <Outlet />
  </div>
}




