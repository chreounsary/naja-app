import { useReducer } from 'react'
import { IoAddCircleSharp } from "react-icons/io5";
import Success from './success';
import AddUserForm from './users/addUserForm';
import { useState } from 'react';
const formReducer = (state, event) => {
  console.log(event.target.value);
  return {
    ...state,
    // name: event.target.value,
    [event.target.name]: event.target.value
  }
}

export default function Form() {

  const [visible, setVisible] = useState(false);
  // () => {} function
  // {} init val
  const handleAdd = (e) => {
    setVisible(visible ? false : true);
  }

  const flags = false;
  // if (Object.keys(formData).length > 0) return <Success></Success>

  return (
    <section>
      <div>
        {visible ? <AddUserForm/> : <></> }
      </div>
      <button onClick={handleAdd}> {visible ? 'Close' : 'Add User' }</button>
    </section>
    
  )
}
