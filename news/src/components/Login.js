import axios from 'axios';
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react'
import '../style/register.css';

const Login=()=>{
    let navigate = useNavigate();

    const [user,setUser]=useState({email:'',password:''})

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }


    const submitForm=(e)=>{
        e.preventDefault();
       const sendData = {

            email:user.email,
            password:user.password
        }


       // console.log(sendData);
    
        axios.post('https://localhost/registration/sssss.php',sendData)
        .then((result)=>{
         console.log(result,"show result");        
         if(result.data.Status === 'Invalid') {
        window.localStorage.setItem('email', result.data.email);
        window.localStorage.setItem('password', (result.data.password));  
        alert('Invalid User');
        }
        else {
        navigate(`/dashboard`);
        
        }
        })
    }

    return(
        <>
        <div className='regstyle'>
        <section className="login first grey">
                <div className="container">
                    <div className="box-wrapper">
                        <div className="box box-border reg">
                            <div className="box-body">
                                <h4>Login</h4>
                                <form  onSubmit={submitForm}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" 
                                        onChange={handleChange} value={user.email}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label className="fw">
                                            Password
                                            <a href="forgot.html" className="pull-right">
                                                Forgot Password?
                                            </a>

                                        </label>
                                        <input type="password" name="password" className="form-control"
                                        onChange={handleChange} value={user.password}                                  
                                        />
                                    </div>
                                    
                                    <div className="form-group text-right">
                                    
                                    <input type="submit" name="submit" className="btn btn-primary btn-block" value="Login"/>
                                       
                                    </div>
                                    
                                    <div className="form-group text-center">
                                        <span className="text-muted">Don't have an account?</span>{" "}
                                        <a href="register.html">Create one</a>
                                    </div>
                                    <div className="title-line">or</div>
                                    <a href="#" className="btn btn-social btn-block facebook">
                                        <i className="ion-social-facebook" /> Login with Facebook
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            </>
        
    )
}

export default Login;