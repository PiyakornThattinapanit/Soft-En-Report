import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Popup from '../../../Popup';
import './Salespage.css';


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

const Salespage=()=> {
  const [popUp,setPopUp] = useState(false);
  const [total,setTotal] = useState('');

    const getMonth = async function(e) {
      const date = e.target.value
      const sendData = {
        'date': date
      }
      const response = await fetch('https://posme.fun:2096/bills/total',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body:JSON.stringify(sendData)
      })
      const data = await response.json()
      setTotal(data)
      console.log(data)
  }

  return (
  <div className='color-sales'>
      <div>
          <img src = "https://cdn.discordapp.com/attachments/1015206753857720341/1016231095479582780/5305244.png" alt = " " className='salesimg2'></img>
        <div className='sel-month' >
          MONTH: <input  type='month' onChange={getMonth}/>
        </div>

        {/* ใส่ค่าที่เรา {fetch} มา */}
          <button variant="primary" type="submit" className='submit-button' onClick={() => {setPopUp(true)}}>
            SUBMIT
          </button>
            {popUp && <Popup closePopUp={setPopUp}
            total={total.total}/>}
      </div>  
  </div>
  );

}
export default Salespage


