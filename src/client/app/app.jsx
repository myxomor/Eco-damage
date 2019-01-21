import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import City from "./components/city";
import Forest from "./components/forest";
import Home from "./components/home";

class App extends React.Component {

    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/city">Пожар в городе</Link>
                        </li>
                        <li>
                            <Link to="/forest">Пожар в лесу</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/city" component={City} />
                    <Route path="/forest" component={Forest} />
                </div>
            </Router>
        );
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);

