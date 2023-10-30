import React from 'react'
import { Helmet } from 'react-helmet';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                
            </Helmet>
            <Breadcrumb title="Login"/>
            <div className="login-wrapper py-4 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center'>Login</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="email" name='email' placeholder='Enter Email' className="form-control" />
                                    </div>
                                    <div>
                                        <input type="password" name='password' placeholder='Enter Password' className="form-control" />
                                    </div>
                                    <div>
                                        <Link to="/forgotpassword" >Forgot Password</Link>
                                        <div className='d-flex justify-content-center gap-15 align-items-center'>
                                            <button className="button border-0">Login</button>
                                            <Link className='button signup' to="/signup">Sign Up</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Login