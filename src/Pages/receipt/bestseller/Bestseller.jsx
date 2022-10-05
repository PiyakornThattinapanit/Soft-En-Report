import { React,useState } from 'react'
import Calendar from 'react-calendar';
import DateRangePickerComp from '../../../Calendar/DateRangePickerComp';
import './Bestseller.css'

function Bestseller() {
  const getMonth = async function(e) {
    const date = e.target.value
    const sendData = {
      'date': date
    }
    const response = await fetch('https://posme.fun:2096/bills/topsell',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body:JSON.stringify(sendData)
    })
    const data = await response.json()
    console.log(data)
  }
  const [buttonColor1, setButtonColor1] = useState(false)
  const [buttonColor2, setButtonColor2] = useState(false)
  return (
    <div className='color-best'>
        <div className='best-seller2'>
            <img src = "https://cdn.discordapp.com/attachments/1015206753857720341/1016234624361431100/6148768.png" alt ="" className='bestsellerimg2'></img>
        </div>
        {/* <div className='select-month'>
        Monthly Best Seller: <input type ='number'/>
        <input type="submit" value="Submit" />
      </div> */}
      <div className='calendar'>
          <input type='month' onChange={getMonth}/>
        </div>

      <div className='sort'>
          <span className='sort-font'>Sort by</span>
          <button className='sort-Amount' onClick={() => {setButtonColor1(!buttonColor1)
          console.log(buttonColor1)}} style={{backgroundColor: buttonColor1? "yellow" : "white"}}>
          Amount
          </button>

          <button className='sort-Date' onClick={() => {setButtonColor2(!buttonColor2)
          console.log(buttonColor2)}} style={{backgroundColor: buttonColor2? "yellow" : "white"}}>
            Date
          </button>
      </div>
    </div>
  )
}

export default Bestseller