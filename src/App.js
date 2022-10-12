import './App.css';
import Icon from './icon/Icon';
import Salespage from './Pages/receipt/sales_page/Salespage';
import Bestseller from './Pages/receipt/bestseller/Bestseller';
import Receipt from './Pages/receipt/Receipt'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbarhome from './Navbarsale';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Login from './Login';



function App() {
  
  return (
  <div>
    <Navbarhome/>
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path = '/Icon' element={<Icon />}/>
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
