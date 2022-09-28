import { React,useState } from 'react'
import Calendar from 'react-calendar';
import DateRangePickerComp from '../../../Calendar/DateRangePickerComp';
import './Bestseller.css'

function Bestseller() {
  // const [value,setValue] = useState(new Date());
  // function handleOnclick() {
  //   const myarray = value.toString().split(" ")
  //   console.log(myarray[1] + " " + myarray[3])
      
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

          {/* <Calendar onChange={setValue} value={value} />
          <button onClick={handleOnclick()}>SUBMIT</button> */}
        </div>

      <div className='filter'>
          <span>Sort by</span>
          <button className='sort-Amount'>
          Amount
          </button>
          <button className='sort-Date'>
            Date
          </button>
      </div>
    </div>
  )
}

export default Bestseller