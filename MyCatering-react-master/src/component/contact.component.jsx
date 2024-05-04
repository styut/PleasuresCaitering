
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../style/contact.css';
import {Link, useNavigate } from 'react-router-dom';
import { createUser } from '../api/users.api';
import { UserContext } from '../context/userContext.context';
import { useContext } from 'react';


export const Contact = () => {
  const {setUser}=useContext(UserContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [useClose, setClose] = useState(true);
  const handleSubmit = async(e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    console.log(firstName, lastName);
    setIsModalOpen(false);
   
      console.log(firstName+"lastName");
      await createUser({"user":{
        "username":firstName,
        "password":lastName,
        }});
        setUser({username:firstName});
        navigate('/home');
  };
  
  const setclose = () => {
    setClose(false);
  };
  return (
   useClose&&<Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Contact Form"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
        <Link to={'/home'}>
        <button id="close" className="close-button" onClick={setclose}>X
            </button></Link>
           
          <label>
            User Name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            password:
            <input type="password" name="lastName" required />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </Modal>
  );
};
