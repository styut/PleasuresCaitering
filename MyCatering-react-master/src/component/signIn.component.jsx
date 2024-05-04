
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../style/contact.css';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../api/users.api';
import { UserContext } from '../context/userContext.context';
import { useContext } from 'react';


export const SignIn = () => {
  const {setUser}=useContext(UserContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [useClose, setClose] = useState(true);
  const [findUser, setFindUser] = useState(false);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const password = e.target.password.value;
    try {
     const response = await getUser(password);
      setUser({username:response.data.username});
      console.log(response);
      if (response)
      {
        setFindUser(true);
      }
      setIsModalOpen(false);
      navigate('/home');
    } catch (error) {
      alert('המשתמש לא רשום במערכת אנא הירשם')
      console.error(error);
    }
  };
  const setclose = () => {
    if (findUser)
      setClose(false);
  };

  return (
    useClose && (
      <Modal
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
              password:
              <input type="password" name="password" required />
            </label>
            <button type="submit">submit</button>
          </form>
        </div>
      </Modal>
      )
  );
};
