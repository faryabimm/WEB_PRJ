import React, {Component} from 'react';
import './LoginPage.css'
import Dice from "../Dice/Dice";

class LoginPage extends Component{
    render(){
        const e1 = (
            <div className='background-image' >
                <div className='background-overlay'>
                    <div className='main-container'>
                        <div className='background-of-elements'>
                            <div className='two-inputs-container' >
                                {/*<p className='input-upper-text'>Username:</p>*/}
                                <input type='text' className='username-input vertical-alignment input-style' id='UserName' placeholder='Username'/>
                                {/*<p className='input-upper-text'>Password:</p>*/}
                                <input type='password' className='password-input vertical-alignment input-style' id='PassWord' placeholder='Password'/>
                            </div>
                            <div className='buttons-container'>
                                <button className='Login-button button-style'>Login</button>
                                <button className='Register-button button-style'>Register</button>
                            </div>
                        </div>
                        <Dice/>
                    </div>
                </div>
            </div>
        )

        const di1 = (
            <div>
                {e1}
                <Dice className='dice'/>
            </div>

        )

        return e1;
    }
}



export default LoginPage;