import React from 'react'

export const RegisterScreen = () => {
    return (
        <div>
            <form>
                <div className="container">
                    <div className="login-form">
                        <div className=" col-sm-6 col-md-6 col-lg-6">
                        
                            <img width="100" className="img-center" src="https://logodownload.org/wp-content/uploads/2014/07/adidas-logo.png"></img>

                            <hr/>

                            <legend className="text-center">Register</legend>

                            <div className="row mt-3">
                                <label >Email</label>
                                <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder=""/>
                            </div>

                            <div className="row mt-3">
                                <label>Password</label>
                                <input type="password" className="form-control" i placeholder=""/>
                            </div>

                            <div className="row mt-3">
                                <label>Confirm password</label>
                                <input type="password" className="form-control" i placeholder=""/>
                            </div>

                            <div className="row mt-3">
                                <button className="btn btn-primary form-control"> Register</button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
