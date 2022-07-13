import { useState } from "react";
// import{useNavigate} from 'react-router-dom';
import { BrowseRoute, Route, Routes, Link } from 'react-router-dom';
import '../style/register.css';
import React, { Component } from 'react';
import axios from 'axios';


const regExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegex = RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
)
const phoneRegex = RegExp(
  /^[0-9]*$/
)

const formValid = ({ isError, ...rest }) => {
  let isValid = true;

  Object.values(rest).forEach(val => {
    if (val === '') {
      isValid = false
    }
  });

  Object.values(isError).forEach(val => {
    if (val.length > 0) {
      isValid = false
    }
  });

  return isValid;
};

export default class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      pass: '',
      phone: '',
      isError: {
        name: '',
        email: '',
        pass: '',
        phone: ''
      }
    }
  }


  onSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log("form Valid");
      let name = this.state.name
      let email = this.state.email
      let pass = this.state.pass
      let phone = this.state.phone



      axios.get('http://localhost/project7/userphp/insertuser.php?name=' + name + '&email=' + email + '&phone=' + phone + '&pass=' + pass
      );

      window.location.href = "/Login";


    } else {
      console.log("Form is invalid!");

    }
  };



  formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name =
          value.length < 4 ? "At least 4 characaters required" : "";
        break;

      case "email":
        isError.email = regExp.test(value)
          ? ""
          : "Email address is invalid";
        break;

      case "pass":
        isError.pass = passRegex.test(value)
          ? ""
          : "Minimum eight characters, at least one letter and one number";
        break;

      case "phone":
        isError.phone = phoneRegex.test(value) && value.length === 10
          ? ""
          : "Must be 10 digits";
        break;

      default:
        break;

    }


    this.setState({
      isError,
      [name]: value
    })
  };

  render() {
    console.log("hello regester");
    const { isError } = this.state;



    return (
      <div className="regstyle">
      <section className="login first grey">
        <div className="container">
          <div className="box-wrapper">
            <div className="box box-border">
              <div className="box-body">
                <h4>Register</h4>
                <form id='regForm' className="d" onSubmit={this.onSubmit} noValidate>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                      className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                      name="name"
                      onChange={this.formValChange}
                    />
                    {isError.name.length > 0 && (
                      <span className="invalid-feedback">{isError.name}</span>
                    )}
                  </div>


                  <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                      className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                      name="email"
                      onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                      <span className="invalid-feedback">{isError.email}</span>
                    )}
                  </div>


                  <div className="form-group">
                    <label>Phone</label>
                    <input type="number"
                      className={isError.phone.length > 0 ? "is-invalid form-control" : "form-control"}
                      name="phone"
                      onChange={this.formValChange}
                    />
                    {isError.phone.length > 0 && (
                      <span className="invalid-feedback">{isError.phone}</span>

                    )}
                  </div>


                  <div className="form-group">
                    <label className="fw">Password</label>
                    <input type="password"
                      className={isError.pass.length > 0 ? "is-invalid form-control" : "form-control"}
                      name="pass"
                      onChange={this.formValChange}
                    />
                    {isError.pass.length > 0 && (
                      <span className="invalid-feedback">{isError.pass}</span>
                    )}
                  </div>


                  <div className="form-group text-right">
                    <button type="submit" className="btn btn-block btn-primary">Sign Up </button>
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

    )
  }

}