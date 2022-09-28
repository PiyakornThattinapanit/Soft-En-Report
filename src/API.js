import {React,useState} from 'react'
import axios from 'axios'

const API =() =>{
    const [searchInfo, setSearchInfo] = useState("")

    const sendToBack = async () => {
        const response = await GetBillData(searchInfo)

  }

  const GetBillData = async (id) => {
    const baseURL = `https://posme.fun:2096/bill/${id}`
    const response = await axios.get(baseURL)
    return response.data
  }
}
export default API