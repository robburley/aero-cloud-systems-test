import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Hotels from './components/Hotels'

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
                    <Hotels/>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(App)
