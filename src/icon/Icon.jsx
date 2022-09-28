import React from 'react'
import Sales from "../img/sales.png"
import Bestseller from "../img/bestseller.png"
// import Receipt from "../img/receipt.png"
import './Icon.css'
import { Link } from 'react-router-dom'


function icon() {
  return (
    <div className='color'>
        <div>
            <button className = "sales">
                <Link to="/Salespage">

                <img src = {Sales} alt = " " className='salesimg'></img>
                <div className='font-sales'>
                    SALES
                </div>
                </Link>
            </button>
        </div>

        <div>
        <button className= 'best-seller'>
            <Link to="/Bestseller">

            <img src = {Bestseller} alt ="" className='bestsellerimg'></img>
            <div className='font-bestseller'>
                BEST-SELLER
            </div>
            </Link>
        </button>
        </div>

        <div>
            
        <button className='receipt'>
            <Link to="/Receiptpage">
                
            <img src= "https://cdn.discordapp.com/attachments/1015206753857720341/1016992486427729930/unknown.png" alt="" className='receiptimg'></img>
            <div className='font-receipt'>
                RECEIPT
            </div>
            </Link>
        </button>
        </div>
        <div className='state'>
            b1
        </div>
    </div>
  )
}

export default icon