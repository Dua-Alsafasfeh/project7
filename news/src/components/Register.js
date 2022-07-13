import { useState } from "react";
import axios from 'axios';
import{useNavigate} from 'react-router-dom';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';
import '../style/register.css';
 
const Register=(props)=>{

    let history = useNavigate(); // Use for Navigate on Previous
    const [data, setData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value }); 

        //console.log(data)
    }
   
    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password

        }

        console.log(sendData,"data");

        axios.post('https://localhost/project7/php_crud/insert.php',sendData)
        .then((result)=>{
            if (result.data.Status === 'Invalid') { 
          alert('Invalid User');  
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           history(`/Login`);
        }
      })  
    }

    return(
      <>
      <div className="regstyle">
        <section className="login first grey">
        <div className="container">
          <div className="box-wrapper">
            <div className="box box-border reg">
              <div className="box-body">
                <h4>Register</h4>
                <form  onSubmit={submitForm}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="first_name" className="form-control"
                     onChange={handleChange} value={data.first_name}
                    />
                  </div>


                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="last_name" className="form-control" 
                    onChange={handleChange} value={data.last_name}
                    />
                  </div>


                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control"
                    onChange={handleChange} value={data.email}            
                    />
                  </div>


                  <div className="form-group">
                    <label className="fw">Password</label>
                    <input type="password" name="password" className="form-control"
                     onChange={handleChange} value={data.password}
                    />
                  </div>


                  <div className="form-group text-right">
                  <input type="submit" name="submit" value="Register" className="btn btn-primary btn-block" />
                  </div>


                  <div className="form-group text-center">
                    <span className="text-muted">Already have an account?</span>{" "}
                    <Link to="/Login">
                    <a href="login.html">Login</a>
                    </Link>
                  </div>
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

export default Register;
