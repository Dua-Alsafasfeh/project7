import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";
// import React, { useState } from 'react'
import '../style/register.css';
import React, { Component, useState, useEffect } from "react";
import axios from 'axios';




function Login() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/project7/userphp/readuser.php`)
            .then((response) => {
                setAPIData(response.data);
                sessionStorage.setItem("id", response.data);
                let id = sessionStorage.getItem("id");
                console.log(response.data, "res.data")
            })
    }, [])

    const [pass, setpass] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    const passHandel = (e) => { setpass(e.target.value) }
    const emailHandel = (e) => { setEmail(e.target.value) }


    const handelLog = (event) => {
        event.preventDefault();
        // document.getElementById('showloginmenu').style.display = "block";
        // document.getElementById('hideloginmenu').style.display = "none";

        // const newe =()=>{


        // }

        // console.log(pass,email);
        // APIData.map(user => console.log(user.email))
        APIData.map((el) => {
            document.getElementById('e1').style.display = "none";
            document.getElementById('e2').style.display = "none";


            //    console.log(e, el.email);
            //    console.log('"'+p+'"');
            if (pass == el.pass && email == el.email) {

                console.log(el.id, 'roa');
                setId(el.id)
                console.log(el.id, 'bahaa');

                sessionStorage.setItem("user_id", el.id);
                let ide = sessionStorage.getItem("user_id"); //// here where i store data
                console.log("heh" + ide);
                // console.log('"'+pass+'"', '"'+el.pass+'"','"'+email+'"', '"'+el.email+'"', 'yas');
                // let id_user= el.id;

                // localStorage.setItem('user', JSON.stringify(id_user)) 


                // setUserId(el.id)
                // setLogin(true)
                // console.log(id_user);
                
                window.location.href = "/";
                
                
                

            } else {
                //    console.log('"'+pass+'"', '"'+el.pass+'"','"'+email+'"', '"'+el.email+'"',  'no');
                document.getElementById('e1').style.display = "block";
                document.getElementById('e2').style.display = "block";
            }
        })

    }

    //   console.log(id,"before render" );

    return (
        <div className='regstyle'>
        <section className="login first grey">
            <div className="container">
                <div className="box-wrapper">
                    <div className="box box-border">
                        <div className="box-body">
                            <h4>Login</h4>
                            <form id='regForm' className="d" noValidate>
                                <div className="form-group">
                                    <label>Email</label>
                                    <br/>
                                    <input type="email"
                                        name="email"
                                        onChange={emailHandel}
                                        className=""
                                    />
                                    <p id="e1" style={{ color: 'red', display: 'none' }}> Invalid email</p>

                                </div>
                                <div className="form-group">
                                    <label className="fw">
                                        Password
                                        {/* <a href="forgot.html" className="pull-right">
                                                Forgot Password?
                                            </a> */}

                                    </label>
                                    <br/>
                                    <input type="password"
                                        name="pass"
                                        onChange={passHandel}
                                        className=""
                                    />
                                    <p id="e2" style={{ color: 'red', display: 'none' }}> Invalid password</p>
                                </div>

                                <div className="form-group text-right">

                                    <button type="" className="btn btn-block btn-primary" onClick={handelLog}>Login</button>

                                </div>

                                <div className="form-group text-center">
                                    <span className="text-muted">Don't have an account?</span>{" "}
                                    <Link to="/Register">
                                        <a href="register.html">Register</a>
                                    </Link>
                                </div>
                                {/* <div className="title-line">or</div>
                                    <a href="#" className="btn btn-social btn-block facebook">
                                        <i className="ion-social-facebook" /> Login with Facebook
                                    </a> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    )
}

export default Login;