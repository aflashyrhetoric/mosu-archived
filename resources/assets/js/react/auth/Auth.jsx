// Auth.jsx
// Handles toggling of modal
// Auth container component

import React from 'react';
import Introduction from './../Introduction';
import Form from './Form';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        
        // this.state = {
        // };
    }

    render() {
        return (
            <div className="container-fluid container__introduction">
                <div className="row">
                    // <Introduction />
                    // <Form />
                </div>
                <div className="row">
                    <div className="col-xs-12 
                    col-md-6 
                    col-lg-4 col-lg-offset-1
                    ">
                        <h1 className="display-4 tac">
                            Track Your Data
                        </h1>
                        <ul className="list-group">
                            <li className="list-group-item">Where you applied</li>
                            <li className="list-group-item">What stage the application is in</li>
                            <li className="list-group-item">Your notes on each company</li>
                            <li className="list-group-item">More! Not much more, but still!</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 
                    col-md-6 col-md-offset-0
                    col-lg-4 col-lg-offset-2
                    ">
                        <h1 className="display-4 tac">
                            Random Goodies
                        </h1>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Works on web & mobile!
                            </li>
                            <li className="list-group-item">
                                Quotes for daily inspiration!
                            </li>
                            <li className="list-group-item">
                                Better than pen & paper. Pen & Paper is basic.
                            </li>
                            <li className="list-group-item">
                                Built w/ React, Bootstrap & Laravel!
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="alert alert-info tac">
                        <p>Coded with love by Kevin Oh. Logo by Rebecca Choi.</p>
                    </div>
                </div>
            </div>
        );
    }
}