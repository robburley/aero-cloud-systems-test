import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <span className="navbar-brand">
                        Rob Burley
                    </span>
                </nav>

                <div className="container mt-5">
                    Components here
                </div>
            </div>
        );
    }
}

export default connect(state => state)(App)
