import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import DateRangePickerComp from "../../../Calendar/DateRangePickerComp";
import "./Bestseller.css";

function Bestseller() {
  const [total, setTotal] = useState([]);
  
  const [monthYear, setmonthYear] = useState("");
  const [buttonColor1, setButtonColor1] = useState(false);
  const [buttonColor2, setButtonColor2] = useState(false);
  let defaultdate = null;


  async function sortRevenue() {
    const sendData = {
      date: monthYear,
      sort: "total_sales",
    };
    const response = await fetch("https://posme.fun:2096/bills/bestselling", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(sendData),
    });
    const data = await response.json();
    console.log(data);
    setTotal(data);
    setButtonColor2(true);
    setButtonColor1(false);
  }

  async function sortAmount() {
    const sendData = {
      date: monthYear,
      sort: "amount",
    };
    const response1 = await fetch("https://posme.fun:2096/bills/bestselling", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(sendData),
    });
    const data1 = await response1.json();
    console.log(data1);
    setTotal(data1);
    setButtonColor2(false);
    setButtonColor1(true);
  }

  const handleChange = async function(e) {
    const date = e.target.value;
    console.log(date);
    setmonthYear(date);
    console.log(monthYear);
    defaultdate = date;
    const sendData = {
      date: defaultdate,
      sort: "total_sales",
    };
    const response = await fetch("https://posme.fun:2096/bills/bestselling", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(sendData),
    });
    setButtonColor2(true);
    const data = await response.json();
    console.log(data);
    setTotal(data);
  }

  const handleClickAmount = async function() {
    sortAmount();
  }

  const handleClickRevenue = async function() {
    sortRevenue();
  }

  return (
    <div className="color-best">
      <div className="best-seller2">
        <img
          src="https://cdn.discordapp.com/attachments/1015206753857720341/1016234624361431100/6148768.png"
          alt=""
          className="bestsellerimg2"
          ></img>
      </div>
      <div className="sel-month">
        <input type="month" onChange= {handleChange}/>
      </div>
      <div className="sort">
        <span className="sort-font">Sort by</span>
        <button
          className="sort-Amount"
          onClick={handleClickAmount}
          style={{ backgroundColor: buttonColor1 ? "#EAC43D" : "white" }}
        >
          Amount
        </button>

        <button
          className="sort-Revenue"
          onClick={handleClickRevenue}
          style={{ backgroundColor: buttonColor2 ? "#EAC43D" : "white" }}
        >
          Revenue
        </button>
  {/* /* ================== .map ================ */}
      </div>
          {total.map((listItem) => (
        <Card className="list-item">
          <h1>Item: {listItem.item_name}</h1>
          <h2>Amount: {listItem.amount}</h2>
          <h2>Revenue: {listItem.total_sales}</h2>
        </Card>
      ))}
      {/* <button
        onClick={() => {
          console.log(total);
        }}
      ></button> */}
      <div className="fill_empty">
        x
      </div>
    </div>
  );
  }

export default Bestseller;
