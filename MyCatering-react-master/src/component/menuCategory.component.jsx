import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { menu } from '../data/menu';
import '../style/menuItemcategory.css';
import { MenuContext } from '../context/menuItem.context';

const MenuItemCategory = ({ props, dishItem }) => {
  const { category } = useParams();
  useEffect(() => {}, [category]);

  const chooseItemMenue = (food, dishh) => {
    menu
      .filter((dish) => dish.category === category)
      .forEach((element) => {
        element.menu[dishh].filter((e) =>
          e.item === food ? (e.choose = '1') : ''
        );
      });

    console.log(menu[0].menu.first[0]);
    console.log(menu[0].menu.main[1]);
  };

  return (
    <div className="menu-item-category">
      <b className="menu-item-category-title">{dishItem}:</b>
      <br />
      {props.map((e) => (
        <label
          className="menu-item-category-label"
          onClick={() => chooseItemMenue(e.item, dishItem)}
        >
          <input value={e.item} type="checkbox" />
          <span className="menu-item-category-span">{e.item}</span>
        </label>
      ))}
    </div>
  );
};

export const MenuCategory = () => {
  const { category } = useParams();
  useEffect(() => {}, [category]);

  const [submit, setSubmit] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const arr = useContext(MenuContext);

  const onSubmit = () => {
    let c = 0;
    menu.map((element) => {
      if (element.category === category) {
        element.disdMenu.map((e) => {
          menu
            .filter((dish) => dish.category === category)
            .forEach((element) => {
              element.menu[e].filter((e) =>
                e.choose === '1' ? (arr[c++] = e.item) : ''
              );
            });
        });
      }
    });
    console.log(arr);
    setSelectedItems(arr);
    setSubmit(true);
  };

  return (
    <div>
      {menu.map((element) => {
        if (element.category === category) {
          return element.disdMenu.map((e) => {
            console.log(element.category + 'element category');
            return (
              <MenuItemCategory props={element.menu[e]} dishItem={e} />
            );
          });
        }
      })}
      <Link to="/menu/submit">
        <button type="submit" onClick={onSubmit}>
          שלח את ההזמנה
        </button>
      </Link>
    </div>
  );
};

