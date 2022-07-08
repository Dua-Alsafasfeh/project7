import './App.css';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Business from './Components/Business';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Business' element={<Business/>}/>
    </Routes>
    </BrowserRouter>
      <Footer/>
      

      </>
  );
}

export default App;
