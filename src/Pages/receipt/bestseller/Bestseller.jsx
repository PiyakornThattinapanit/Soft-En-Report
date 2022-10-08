import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import DateRangePickerComp from "../../../Calendar/DateRangePickerComp";
import "./Bestseller.css";

function Bestseller() {
  const [total, setTotal] = useState([]);

  const getMonth = async function (e) {
    const date = e.target.value;
    // console.log(date)
    const sendData = {
      date: date,
    };
    const response = await fetch("https://posme.fun:2096/bills/topsell", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(sendData),
    });
    const data = await response.json();
    console.log(data);
    let i = 0;
    data.forEach((eachArray) => {
      eachArray.id = i;
      i++;
    });
    setTotal(data);
  };

  const sortAmount = async function (e) {
    const date = e.target.value;
    const sendData = {
      sort: "amount",
    };
    const response = await fetch("https://posme.fun:2096/bills/topsell", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(sendData),
    });
    const data = await response.json();
    console.log(data);
    setTotal(data)
  };

  const sortRevenue = async function (e) {
    const date = e.target.value;
    // console.log(date)
    const sendData = {
      sort: "total_sales",
    };
    const response = await fetch("https://posme.fun:2096/bills/topsell", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(sendData),
    });
    const data = await response.json();
    console.log(data);
  };
  const [buttonColor1, setButtonColor1] = useState(false);
  const [buttonColor2, setButtonColor2] = useState(false);
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
        <input type="month" onChange={getMonth} />
      </div>
      <div className="sort">
        <span className="sort-font">Sort by</span>
        <button
          className="sort-Amount"
          onClick={() => {
            setButtonColor1(!buttonColor1);
            sortAmount()
            if (!buttonColor1) sortAmount(); 
            else getMonth()
          
            console.log(buttonColor1);
          }}
          style={{ backgroundColor: buttonColor1 ? "#EAC43D" : "white" }}
        >
          Amount
        </button>

        <button
          className="sort-Revenue"
          onClick={() => {
            setButtonColor2(!buttonColor2);
            console.log(buttonColor2);
          }}
          style={{ backgroundColor: buttonColor2 ? "#EAC43D" : "white" }}
        >
          Revenue
        </button>
{/* /* ================== .map ================ */}
      </div>
          {total.map((listItem) => (
        <Card className="list-item">
          <h1>Item: {listItem.item_name}</h1>
          <h1>Item: {listItem.amount}</h1>
        </Card>
      ))}
      {/* <button
        onClick={() => {
          console.log(total);
        }}
      ></button> */}
    </div>
  );
}

export default Bestseller;
