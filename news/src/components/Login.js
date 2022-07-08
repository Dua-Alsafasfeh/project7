import React from 'react';
function Login() {
    return (
        <>
            <section className="login first grey">
                <div className="container">
                    <div className="box-wrapper">
                        <div className="box box-border">
                            <div className="box-body">
                                <h4>Login</h4>
                                <form>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name="username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="fw">
                                            Password
                                            <a href="forgot.html" className="pull-right">
                                                Forgot Password?
                                            </a>
                                        </label>
                                        <input type="password" name="password" className="form-control" />
                                    </div>
                                    <div className="form-group text-right">
                                        <button className="btn btn-primary btn-block">Login</button>
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
        </>
    )
}
export default Login;