import React, {Component} from 'react';
import './LoginPage.css'
import Dice from "../Dice/Dice";
import RegisterPage from '../../containers/Register/RegisterPage';


class LoginPage extends Component{
    constructor(){
        super();
        this.state={
            isOnLoginPage:true,
        }
    }
    render(){
        if(this.state.isOnLoginPage) {
            const e1 = (
                <div className='background-image'>
                    <div className='background-overlay'>
                        <div className='main-container'>
                            <div className='background-of-elements-2'>
                                <div className='two-inputs-container'>
                                    {/*<p className='input-upper-text'>Username:</p>*/}
                                    <input type='text' className='username-input vertical-alignment input-style'
                                           id='UserName' placeholder='Username'/>
                                    {/*<p className='input-upper-text'>Password:</p>*/}
                                    <input type='password' className='password-input vertical-alignment input-style'
                                           id='PassWord' placeholder='Password'/>
                                </div>
                                <div className='buttons-container'>
                                    <button className='Login-button button-style'>Login</button>
                                    <button onClick={() => this.setState({isOnLoginPage: false})}
                                            className='Register-button-2 button-style'>Register
                                    </button>
                                </div>
                            </div>
                            <Dice/>
                        </div>
                    </div>
                </div>
            )
            return e1;
        }else {
            return <RegisterPage/>;
        }



    }
}



export default LoginPage;