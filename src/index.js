import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from './containers/AppContainer';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
