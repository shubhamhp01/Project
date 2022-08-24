
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/register.css';
import Navbar from './components/Navbar';
import Login from './components/login';
import Form from './components/register';
const propDict = {title : "Manage Products" ,index : "Code", productName :"Name", image :"Image", product_price: "Price", category :"Category", reviews : "Reviews", status : "Status" }
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<NoPage />} /> */}
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/register" element = {<Form/>} />

        </Routes>
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
