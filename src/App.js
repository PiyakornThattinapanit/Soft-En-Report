import './App.css';
import Icon from './icon/Icon';
import Salespage from './Pages/receipt/sales_page/Salespage';
import Bestseller from './Pages/receipt/bestseller/Bestseller';
import Receipt from './Pages/receipt/Receipt'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbarhome from './Navbarsale';
// import { Navbar } from 'react-bootstrap/navba';
// import Navbar from './Navbar'
import { useEffect, useRef, useState ,React} from 'react'
// import DateRangePickerComp from './Calendar/DateRangePickerComp';
import format from 'date-fns/format'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Test from './Calendar/Test';
import DateRangePickerComp from './Calendar/DateRangePickerComp';



function App() {
  
  return (
  <div>
    {/* <Test/> */}
    <Navbarhome/>
    <BrowserRouter>
    <div className="App">
        <Routes>
        <Route path = '/' element={<Icon />}/>
         <Route path = '/Salespage' element={<Salespage />}/>
         <Route path = '/Bestseller' element={<Bestseller />}/>
         <Route path = '/Receiptpage' element={<Receipt />}/>
        </Routes> 
  
     </div> 
    </BrowserRouter>
          </div>
  
  );
}

export default App;
