import React, { useContext, useState } from 'react';
import { createMeeting } from '../api/meeting.api';
import '../style/submit.css';
import {  useNavigate } from 'react-router-dom';
import { MenuContext } from '../context/menuItem.context';

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const ItemsChoose = useContext(MenuContext);
  const handleSubmit = (e) => {
    console.log("esti");
    e.preventDefault();
    const date = e.target.date.value;
    const Name = e.target.Name.value;
    const location = e.target.location.value;
    const email = e.target.email.value;
    const phone = e.target.telephone.value;
    const time = e.target.time.value;
    createMeeting(location, date, time, email, Name, phone,ItemsChoose);
    console.log(location, date, time, email, Name, phone,ItemsChoose);
    navigate('/endOrder');
    console.log(submit);
    console.log(submit);

  
  };

  return (
    <div>
      <h2>דף אישור</h2>
      <h3>פריטים נבחרים:</h3>
      <ul>
        {ItemsChoose.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          תאריך:
          <input type="date"  name="date" required />
        </label>
        <br />
        <label>
          שם:
          <input type="text"  className='textSubmit' name="Name" required />
        </label>
        <br />
        <label>
          טלפון:
          <input type="tel" name="telephone" required />
        </label>
        <br />
        <label>
          שעה:
          <input type="time"  name="time" required />
        </label>
        <br />
        <label>
          דוא"ל:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          מיקום האירוע:
          <input type="text"  className='textSubmit' name="location" required />
        </label>
        <br />
        <button type="submit" >
        אישור
        </button>
      </form>
    </div>
  );
};
