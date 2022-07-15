import React, { useState } from 'react';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import '../style/navbar.css';

function Navbar(props) {

    let user_id = props.user_id;

    let userid = sessionStorage.getItem("user_id");
    console.log(userid, 'nav');

    let state = false;
    console.log(state);

    if (userid > 0) {
        state = true;
    }
    else if (userid == null || userid == 0) {
        state = false;
    }

    const [login, set_logged] = useState(state);

    const logout = () => {
        localStorage.removeItem('email');
        localStorage.clear();
        userid = 0;
        sessionStorage.setItem("user_id", 0);
        state = false;
        set_logged(false);

    }
    return (
        <>
            <nav className="menu">
                <div className="container-fluid navbar-fixed-top " style={{ backgroundColor: 'white' }}>
                    <div id="m">
                        <ul className="nav-list">

                            <li>
                                <span>
                                    <Link to="/Home">
                                        <a href="index.html">
                                            <img src="images/logo.png" alt="Magz Logo" width="37%" />
                                        </a>
                                    </Link>
                                </span>
                            </li>
                            <li className="dropdown magz-dropdown" id="center">
                                <Link to="/Home">
                                    <a className='h4 font-weight-bold' href="category.html">Home </a>
                                </Link>
                            </li>
                            <li className="dropdown magz-dropdown">
                                <Link to="/About">
                                    <a className='h4 font-weight-bold' href="category.html">About Us </a>
                                </Link>
                            </li>
                            <li className="dropdown magz-dropdown">
                                <Link to="/Contact">
                                    <a className='h4 font-weight-bold' href="category.html">Contact Us </a>
                                </Link>
                            </li>

                            <ul className="nav-icons" id="m1">
                                <Link to='/Register' className='linkmenu'>
                                    <li className='menutab' id="hideloginmenu" style={{ display: state ? 'none' : 'block' }}>
                                        <a className='h4 font-weight-bold' href="register.html">
                                            <span className="ion-person-add" />
                                            &nbsp;Register
                                        </a>
                                    </li>
                                </Link>
                                <Link to='/Login' className='linkmenu'>
                                    <li className='menutab' id="hideloginmenu" style={{ display: state ? 'none' : 'block' }}>
                                        <a className='h4 font-weight-bold' href="login.html">
                                            <i className="ion-person" />
                                            &nbsp;Login
                                        </a>
                                    </li>
                                </Link>
                                <li className="dropdown magz-dropdown">
                                    <Link to="/MyAccount">
                                        <a className='h4 font-weight-bold' href="category.html" style={{ display: state ? 'block' : 'none' }} > <Icon icon="material-symbols:sell-sharp" />&nbsp;My Ads
                                        </a>
                                    </Link>
                                </li>
                                <li className="dropdown magz-dropdown">
                                    <Link to="/Login">
                                        <a className='h4 font-weight-bold' href="category.html" style={{ display: state ? 'block' : 'none' }} onClick={logout}><Icon icon="humbleicons:logout" width='25' /> &nbsp;Logout</a>
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        <hr className='mt-1'/>
        </>
    )
}
export default Navbar;