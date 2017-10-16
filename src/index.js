import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/IndexApp';
import {trace} from 'satcheljs-trace';
import { applyMiddleware, ActionMessage, DispatchFunction } from 'satcheljs';
import devtool from 'satcheljs-react-devtools';
import registerServiceWorker from './registerServiceWorker';

const traceMiddleware = (next, actionMessage) =>  {
    console.log("Dispatching action: " + actionMessage.type);
    next(actionMessage);
};

const bootstrap =() => {
    // Optionally enable some dev tools based on a URL parameter
    let regex = new RegExp("[\\?&]devtools=");
    let url = window.location.href.toLowerCase();
    if (regex.exec(url)) {
        applyMiddleware(devtool, trace);
        traceMiddleware(DispatchFunction, ActionMessage);
    }

    // Render the app
    ReactDOM.render(<App />, document.getElementById('root'));
};

bootstrap();


