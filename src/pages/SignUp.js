import React from 'react'
import { Helmet } from 'react-helmet';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Sign Up</title>
                
            </Helmet>
            <Breadcrumb title="Register"/>
            <div className="login-wrapper py-4 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center'>Register New User</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="email" name='email' placeholder='Enter Email' className="form-control" />
                                    </div>
                                    <div>
                                        <input type="password" name='password' placeholder='Enter Password' className="form-control" />
                                    </div>
                                    <div>
                                        <input type="password" name='rePassword' placeholder='Enter Password Again' className="form-control" />
                                    </div>
                                    <div>
                                        <input type="number" name='rePassword' placeholder='Enter Phone Number' className="form-control" />
                                    </div>
                                    <div>
                                        
                                        <div className='d-flex justify-content-center gap-15 align-items-center'>
                                            <button className="button border-0">Login</button>
                                            
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

export default SignUp