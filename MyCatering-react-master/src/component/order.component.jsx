import React from 'react';

export const ConfirmationPage = ({ selectedItems }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Confirmation Page</h2>
      <h3>Selected Items:</h3>
      <ul>
        {selectedItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" name="firstName" required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" required />
        </label>
        <br />
        <label>
          Telephone:
          <input type="tel" name="telephone" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Location of the Event:
          <input type="text" name="location" required />
        </label>
        <br />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};
