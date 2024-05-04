import axios from 'axios';
// קובץ זה מכיל את כל קריאות השרת עבור קטגוריות
// שליפה של כל הרשימה
export const getMeeting = ()=> { 
    // return axios.get(`http://localhost:3000/meeting/${id}`);
    return axios.get(`http://localhost:3000/meeting/?business_id=123`);
}

// מחיקה
export const deleteMeeting = (id) => {
    console.log(id);
    return axios.delete(`http://localhost:3000/meeting/${id}`);
}

// עדכון
export const updateMeeting = (id, meeting) => {

    return axios.put(`http://localhost:3000/meeting/${id}`, {
        meeting,
    });
}

// יצירה


export const createMeeting = (location,date,start_time,email,name,phone,arrItemsChoose) =>{
    console.log("etty");
    return axios.post(`http://localhost:3000/meeting`,{
        business_id:"123",
        start_time,
        duration:"2",
        meeting:{
            location,
            date,
            email,
            name,
            phone,
            arrItemsChoose
    }
    });
}






