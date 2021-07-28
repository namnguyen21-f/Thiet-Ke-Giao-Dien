import React from 'react';
import Image from './image.jpg'
import './index.css';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LockOpenIcon from '@material-ui/icons/LockOpen';
export default class Stock extends React.Component{
    constructor(props){
        super();
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="LoginPage">
                <div className="logo">
                    <h2>StockManage</h2>
                </div>
                <div className="d-flex">
                    <div className="login-image">
                        <img src={Image} alt="creative"></img>
                    </div>
                    <div className="login-form">
                        <div>
                            <h2 className="title">Welcome Back :))</h2>
                            <p className="subtitle">To keep in touch with us please login with your personal information by email and password</p>
                            <div className="d-flex login-form-input">
                                <div className="input_icon"><MailOutlineRoundedIcon fontSize="large"/> </div>
                                <div className="input_input"> 
                                    <label for="email">Email</label>
                                    <input id="email" type="email" placeholder="Your email"></input>
                                </div>
                            </div>
                            <div className="d-flex login-form-input">
                                <div className="input_icon"><LockOpenIcon fontSize="large"/> </div>
                                <div className="input_input">
                                    <label for="password">Password</label>
                                    <input id="password" type="password" placeholder="Your password"></input>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around mt1">
                                <label className="checkbox">
                                    <input type="checkbox"></input>
                                    Remember me
                                </label>
                                <a className="text-muted" href="/forgotPassword">Forgot password?</a>
                            </div>
                            <div className="loginBtn margin-lr-auto">
                                <a>Login Now</a>
                            </div>
                            <div className="loginMedia">
                                <p>Or you can join with</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}