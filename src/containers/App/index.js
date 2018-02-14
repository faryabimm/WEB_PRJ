import SNL from '../SNL'
import { Route, Link } from 'react-router-dom'
import React from 'react';
// class App extends Component {
//   render() {
//     return (
//         <a>salam</a>
//         // <SNL />
//     );
//   }
// }
const App = () => (
    <div>
        <header>
            {/*<Link to="/">Home</Link>*/}
            {/*<Link to="/about-us">About</Link>*/}
        </header>

        <main>
            <SNL/>
            {/*<Route exact path="/" component={SNL} />*/}
        </main>
    </div>
);
export default App;
