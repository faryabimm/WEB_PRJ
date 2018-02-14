import React, {Component} from 'react';
import './LoginPage.css'
import Dice from "../Dice/Dice";
import RegisterPage from '../../containers/Register/RegisterPage';
import SNL from "../SNL";
import Parse from "parse";

let db_write_handle = Parse.Object.extend("User");

class LoginPage extends Component {
    constructor() {
        super();

        debugger;
        if (document.location.href.lastIndexOf('?') === -1) {
            this.state = {
                isOnLoginPage: true,
                isOnGamePage: false,
            };
        } else {
            this.state = {
                isOnLoginPage: false,
                isOnGamePage: true,
            };
        }



        this.get_game_data = this.get_game_data.bind(this);
        this.initiate_game = this.initiate_game.bind(this);
        this.login_button = this.login_button.bind(this);
    }

    render() {
        if (this.state.isOnGamePage) {
            return (<SNL/>)
        } else if (this.state.isOnLoginPage) {
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
                                    <button onClick={this.login_button} className='Login-button button-style'>Login</button>
                                    <button onClick={this.get_game_data}
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
        } else {
            return <RegisterPage/>;
        }


    }

    login_button() {
        let username = document.getElementById('UserName').value;
        let password = document.getElementById('PassWord').value;

        this.get_game_data(username);
        // if (check_account(username, password)) {
        //     debugger;
        // }



    }

    get_game_data(username) {
        let r = new Rest();
        let p = r.makeAjaxCall('http://localhost:3001/enter', 'GET');
        p.then((result) => {
                return this.initiate_game(result, username);
            },
            (err) => {
                console.log(err);
            });
    }




    initiate_game(data, username) {
        let game_id, player_id, game_ready;

        ({player_id, game_id, game_ready} = data);
        console.log(player_id);
        console.log(game_id);
        console.log(game_ready);

        document.location.href += `?player_id=${player_id}&game_id=${game_id}&game_ready=${game_ready}&user_name=${username}`;
        this.setState(
            {
                isOnLoginPage: false,
                isOnGamePage: true,
            }
        );
    }


}

export default LoginPage;

class Rest {
    makeAjaxCall(url, methodType) {
        var promisObj = new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(methodType, url, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                console.log(xhr.readyState, xhr.status);
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log("xhr done ok!");
                        var resp = xhr.responseText;
                        var respJson = JSON.parse(resp);
                        // console.log(respJson);
                        resolve(respJson);
                    } else {
                        reject(xhr.status);
                        console.log("xhr failed");
                    }
                } else {
                    console.log("xhr processing going on");
                }
            }
        });
        return promisObj;
    }
}

function create_account(username, password) {
    let record = new db_write_handle();
    record.set("username", username);
    record.set("password", password);

    record.save(null, {
        success: function (id) {
            console.log('New move added to database created with objectId: ' + id.id);
        },
        error: function (gameScore, error) {
            console.error('Failed to create new move, with error code: ' + error.message);
        }
    });
}

function check_account(username, password) {
    let query = new Parse.Query(db_write_handle);
    query.equalTo("username", username).equalTo("password", password);
    query.find({
        success: function (results) {
            if (results.size  <= 0) {
                return true
            }
            let a = results[0].get('message');
            console.log(a);
            return true;


            // TODO_DONE OBTAIN GAME ID AND PLAYER ID FROM SERVER AND START GAME


        },
        error: function (error) {
            alert("Error: " + error.code + " " + error.message);
            return false;
        }
    });
}

