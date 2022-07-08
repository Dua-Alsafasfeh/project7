import React from 'react';

function Register() {
  return (
    <>
      <section className="login first grey">
        <div className="container">
          <div className="box-wrapper">
            <div className="box box-border">
              <div className="box-body">
                <h4>Register</h4>
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="fw">Password</label>
                    <input type="password" name="password" className="form-control" />
                  </div>
                  <div className="form-group text-right">
                    <button className="btn btn-primary btn-block">Register</button>
                  </div>
                  <div className="form-group text-center">
                    <span className="text-muted">Already have an account?</span>{" "}
                    <a href="login.html">Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default Register;