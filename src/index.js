import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from '../components/Hello.js';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Hello />,
    document.getElementById('main-content')
);

serviceWorker.unregister();
