import React, { useContext, useEffect, useState } from 'react';
import {ManagerContext} from '../../context/manager.context'
import{getUsers} from '../../api/users.api';
export const UsersManager = () => {
    const manager=useContext(ManagerContext)
    const [users,setUsers]=useState([]);
       useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getUsers();
          const { data } = response;
          setUsers(data);
          console.log(data);
        } catch (error) {
          console.log("error fetching meetings", error);
        }
      };
  
      if (manager[0]) {
        fetchData();
      }
    }, [manager]);
    return <div>
     {manager[0]&&<div>
        <h1>my users</h1>
        {users.map(e=><li key={e.id}>{e.username}</li>)}
        
        </div>}
     {!manager[0]&&<div>out!!!!!!!!!!!!!!!!!!!!!</div>}
     
</div>
}