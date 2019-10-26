import React from 'react'

export default function Signup() {
    return (
        <div className="container col-lg-3">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>Sign up</h1>
                </div>
                <div className="panel-body">
                    <form role="form">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="second_name">Second Name</label>
                                    <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" />
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>

                                    <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="password_confirmation">Confirm password</label>

                                    <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password" />
                                </div>
                            </div>
                        </div>

                        <input type="submit" value="Register" className="btn btn-primary btn-block" />

                    </form>
                </div>
            </div>
        </div>


    )
}
