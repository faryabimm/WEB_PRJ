import SNL from '../SNL'
import { Route, Link } from 'react-router-dom'
import React from 'react';
import LoginPage from "../LogIn/LoginPage";
// class App extends Component {
//   render() {
//     return (
//         <a>salam</a>
//         // <SNL />
//     );
//   }
// }
export default class App extends React.Component {
    render () {
        return (
            <div>
                <header>
                    {/*<Link to="/">Home</Link>*/}
                    {/*<Link to="/about-us">About</Link>*/}
                </header>

                <main>
                    <SNL/>
                </main>
            </div>
        )
    }
}

