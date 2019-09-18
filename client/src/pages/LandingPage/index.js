import React from './node_modules/react';
import ReactDOM from "react-dom";
import App from "./App";
import './style.css';

class LandingPage extends React.Component {
    render() {
        return (
            <h1 className='goodbye-world'>
                Goodbye, world!
            </h1>
        );
    }
}

export default GoodbyeWorld;