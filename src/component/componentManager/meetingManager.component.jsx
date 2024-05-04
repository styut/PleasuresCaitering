import React, { useContext, useState, useEffect } from 'react';
import { ManagerContext } from '../../context/manager.context';
import { getMeeting, deleteMeeting, updateMeeting, createMeeting } from '../../api/meeting.api';
import '../../style/meetingManager.css'
export const MeetingManager = () => {
  const [data, setData] = useState([]);
  const [chooseEdit, setChooseEdit] = useState(0);
  const [addMeeting, setAddMeeting] = useState(false);
  const manager = useContext(ManagerContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMeeting();
        const { data } = response;
        setData(data);
      } catch (error) {
        console.log("error fetching meetings", error);
      }
    };

    if (manager[0]) {
      fetchData();
    }
  }, [manager]);

  const deleteUser = async (id) => {
    await deleteMeeting(id);
    setData(data.filter(e => e.id !== id));
  }

  const updateHour = async (e) => {
    e.preventDefault();
    const hour = e.target.value;
    const id = chooseEdit;
    setChooseEdit(0);
    const updatedMeeting = await updateMeeting(id, { "startTime": hour });
    const updatedData = data.map(e => e.id === id ? updatedMeeting.data : e);
    setData(updatedData);
  }

  const updateUser = (id) => {
    setChooseEdit(id);
  }

  const sortedDate = () => {
    const sortDate = data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(sortDate);
  }
  const sortedName = () => {
    const sortDate = data.slice().sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    console.log(sortDate);
    setData(sortDate);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const name = e.target.name.value;
    const location = e.target.location.value;
    const email = e.target.email.value;
    const phone = e.target.telephone.value;
    const time = e.target.time.value;
    const newMeeting = await createMeeting(location, date, time, email, name, phone, []);
    setData([...data, newMeeting.data]);
    console.log(data);
    console.log(newMeeting);
    setAddMeeting(false);

  };

  return (
    <div>
      {manager[0] && <div>
        <h1>Your Meetings:</h1>
        <button className='button' onClick={() => setAddMeeting(true)}>Add Meeting</button>
        <button className='button' onClick={() => sortedName()}>sort by name</button>
        <button className='button' onClick={() => sortedDate()}>sort by date</button>
        <br></br>
        <br></br>
        {data.map((e) => (
          <div key={e.id}>
            {e.date} | {e.location} | {e.name} | {e.startTime}

            {chooseEdit === e.id &&
              <input onBlur={updateHour} type="text" name="hour" />
            }

            <button className='delete' onClick={() => deleteUser(e.id)}>x</button>
            <button className='edit' onClick={() => updateUser(e.id)}>🖌</button>

            <br></br>
            <br></br>

          </div>
        ))}

        {addMeeting &&
          <form className='form' onSubmit={handleSubmit}>
            <label>
              Date:
              <input type="date" name="date" required />
            </label>
            <br />
            <label>
              Name:
              <input type="text" className='text' name="name" required />
            </label>
            <br />
            <label>
              Telephone:
              <input type="tel" name="telephone" required />
            </label>
            <br />
            <label>
              Time:
              <input type="time" name="time" required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <br />
            <label>
              Event Location:
              <input type="text" className='text' name="location" required />

            </label>
            <br />
            <button type="submit">

              Submit
            </button>
          </form>
        }</div>}

      {!manager[0] && <div>Logged out!</div>}
    </div>
  );
};
