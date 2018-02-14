import React, {Component} from 'react';
import './RegisterPage.css'
import Dice from "../Dice/Dice";
import LoginPage from '../../containers/LogIn/LoginPage'
import 'font-awesome/css/font-awesome.css';

class RegisterPage extends Component{
    constructor(){
        super();
        this.state={
            isOnRenderPage:true,
        }
    }
    render(){
        if(this.state.isOnRenderPage) {
            const e1 = (
                <div className='background-image'>
                    <div className='background-overlay'>
                        <div className='main-container'>
                            <div className='background-of-elements'>
                                <div className='two-inputs-container'>
                                    {/*<p className='input-upper-text'>Username:</p>*/}
                                    <input type='text' className='username-input vertical-alignment input-style'
                                           id='UserName' placeholder='Username'/>
                                    {/*<p className='input-upper-text'>Password:</p>*/}
                                    <input type='password' className='password-input vertical-alignment input-style'
                                           id='PassWord' placeholder='Password'/>
                                    <input type='password' className='password-input vertical-alignment input-style'
                                           id='ConfirmPassWord' placeholder='ConfirmPassword'/>
                                </div>
                                <div className='buttons-container'>
                                    {/*<button className='Login-button button-style'>Login</button>*/}
                                    <button className='Register-button button-style'>Register</button>
                                    <button className='back-to-login-button' onClick={() => this.setState({isOnRenderPage:false})}><i className='fa fa-arrow-left'></i></button>
                                </div>
                            </div>
                            <Dice/>
                        </div>
                    </div>
                </div>
            )
            return e1;
        }


        return <LoginPage/>;
    }
}



export default RegisterPage;