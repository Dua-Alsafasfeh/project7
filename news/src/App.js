import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Business from './Components/Business';
import About from './Components/About';
import Contact from './Components/Contact';
import Comment from './Components/Comment';
import News from './Components/News';
import Ads from './Components/UserAds';
import BreakingNews from './Components/SlideShow';
import TopNews from './Components/TopNews';
import Weather from './Components/Weather';
import UserPro from './Components/UserPro';
import Tech from './Components/Tech';
import Health from './Components/Health';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Weather />
        
        <TopNews />
         {/* ////////////////////small categories//////////// */}
         <div className="firstbar">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-sm-2 col-sm-12"></div> */}
                        <div className="col-md-7 col-sm-12 ">
                            <form className="search" autoComplete="off">
                                <div className="help-block">
                                    <div>Categories:</div>
                                    <ul>
                                        <li>
                                          <Link to="/Business">
                                            <a href="#">Business ,</a></Link>
                                        </li>
                                        <li>
                                          <Link to="/Sport">
                                            <a href="#">Sport ,</a></Link>
                                        </li>
                                        <li>
                                          <Link to="/Health">
                                            <a href="#">Health </a></Link>
                                        </li>
                                        <li>
                                          <Link to="/Tech">
                                            <a href="#">Technology </a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <hr className='container'
          style={{
            background: '#21325E',
            color: '#21325E',
            borderColor: '#21325E',
            height: '3.5px',
          }}
        />
        
        <Ads />
        {/* <Comment/> */}
        <Routes>
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/:userid' element={<Home />} />
          <Route path='/Business' element={<Business />} />
          <Route path='/Health' element={<Health />} />
          <Route path='/Tech' element={<Tech />} />
          <Route path='/Sport' element={<News />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/MyAccount' element={<UserPro />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}
export default App;
