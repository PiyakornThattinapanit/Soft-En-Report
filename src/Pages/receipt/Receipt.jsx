import {React,useState} from 'react'
import Calendar from 'react-calendar/dist/umd/Calendar'
import './Receipt.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

const Receipt = () => {
    // const [value,setValue] = useState(new Date());
    // )
  const [searchInfo, setSearchInfo] = useState("")

  const sendToBack = async () => {
      const response = await GetBillData(searchInfo)

  }

  const GetBillData = async (id) => {
    const baseURL = `https://posme.fun:2096/bill/${id}`
    const response = await axios.get(baseURL)
    return response.data
  }
  return (
    <div className='color-receipt'>
        <div className='receipt2'>
            <img src= "https://cdn.discordapp.com/attachments/1015206753857720341/1016992486427729930/unknown.png" alt="" className='receiptimg2'></img>
        </div>
        {/* <div className='calendar'>
          <Calendar onChange={setValue} value={value} />
          <button onClick={handleOnclick()}>SUBMIT</button>
        </div> */}
        <Form>
      <Form.Group className="mb-3" controlId="formBasicReceipt">
        <Form.Label>Receipt no</Form.Label>
        <Form.Control placeholder="Search-Receipt-No" onChange={e => setSearchInfo(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control placeholder="DD/MM/YYYY(ex.2022)" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={() => sendToBack()}>
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default Receipt