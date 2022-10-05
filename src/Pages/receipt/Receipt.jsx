import {React,useState,useRef} from 'react'
import Calendar from 'react-calendar/dist/umd/Calendar'
import './Receipt.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

const Receipt = () => {
    // const [value,setValue] = useState(new Date());
    // )
  const reciptNoRef = useRef()
  const [searchInfo, setSearchInfo] = useState("")

  // const sendToBack = async () => {
  //     const response = await GetBillData(searchInfo)

  // }

  const submitData = async function(e) {
    e.preventDefault()
    console.log(reciptNoRef.current.value)
    const sendData = {
      
    }
    const response = await fetch('/reports/total',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body:JSON.stringify(sendData)
    })
    const data = response.json()
    console.log(data)
  }

  const [value, onChange] = useState(new Date());
  const sendData = async function(){
    const body = {
      'date': value
    }
    const response = await fetch('/bills/{bill_id}',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body:JSON.stringify(body)
    })
    const data = response.json()
    console.log(data)
  }
  // function handleOnclick() {
  //     console.log(value)
  //     // const myarray = value.toString().split(" ")
  //     // console.log(myarray[1]+ " "+ myarray[3]) 
  //     // const send = (myarray[1] + " " + myarray[3])
  // }
  

  // const GetBillData = async (id) => {
  //   const baseURL = `https://posme.fun:2096/bill/${id}`
  //   const response = await axios.get(baseURL)
  //   return response.data
  // }
  return (
    <div className='color-receipt'>
        <div className='receipt2'>
            <img src= "https://cdn.discordapp.com/attachments/1015206753857720341/1016992486427729930/unknown.png" alt="" className='receiptimg2'></img>
        </div>
        {/* <div className='calendar'>
          <Calendar onChange={setValue} value={value} />
          <button onClick={handleOnclick()}>SUBMIT</button>
        </div> */}
        {/* <Form> */}
      <Form.Group className="mb-3" controlId="formBasicReceipt">
        <Form.Label>Receipt no</Form.Label>
        <Form.Control placeholder="Search-Receipt-No" ref={reciptNoRef}/>
      </Form.Group>
    <div className='calendar'>
          <div className='calendar'>
            <input type='date'/>
        </div>
    </div>
      <Button variant="primary" type="submit" onClick={submitData}>
        Submit
      </Button>
    {/* </Form> */}

    </div>
  )
}

export default Receipt