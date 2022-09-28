import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DateRangePickerComp from '../../../Calendar/DateRangePickerComp';
import './Salespage.css'


async function login(){

  const response = await fetch("https://posme.fun/auth/login", {
    credentials: "include",
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify({
      username:'hello',
      password:'psswd'
    })
  });
  const data = await response.json();
  console.log(data);
}

function Salespage() {
  login();
  // const [value, setValue] = useState(new Date());
  // function handleOnclick() {
  //     const myarray = value.toString().split(" ")
  //     console.log(myarray[1]+ " "+ myarray[3])
      // const target = (myarray[1] + " " + myarray[3])
    

  return (
  <div className='color-sales'>
      <div>
          <img src = "https://cdn.discordapp.com/attachments/1015206753857720341/1016231095479582780/5305244.png" alt = " " className='salesimg2'></img>
        {/* <div className='month'>
          MONTH: <input type='month' />
          <input type="submit" value="Submit" />
        </div> */}
        <div className='calendar'>
          <DateRangePickerComp/>
          {/* <Calendar onChange={setValue} value={value} />
          <button onClick={handleOnclick()}>SUBMIT</button> */}
        </div>
        <div className='net-worth'>
          NET WORTH: <input type="text" />
        </div>
      </div>  
  </div>
  );
}

export default Salespage


