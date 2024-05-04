import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { ManagerContext } from '../../context/manager.context';
import '../../style/manager.css'

export const Manager = () => {
    const [order, setOrder] = useState(false);
    const manager = useContext(ManagerContext);

    const passwordManager = (e) => {
        if (e === "123456") {
            console.log(manager[0]);
            setOrder(true);
            manager[0] = true;
            console.log(manager[0]);
        } else {
            setOrder(false);
            manager[0] = false;
        }
    };

    const handleUsernameChange = (e) => {
    };

    return (
        <div className="manager-container">
            <h2>Welcome,</h2>
            <input type="text" className='textt' placeholder="Enter username" onChange={handleUsernameChange} />
            <input type="password"  className='textt'  onBlur={e => passwordManager(e.target.value)} />
            <br />
            <br />
            {order && <button className='buttons'><Link to={ '/usersManager'}>Users</Link></button>}
            <br />
            <br />
            {order &&  <button className='buttons'><Link to={'/meetingManager'}>Meetings</Link></button>}
        </div>
    );
};
