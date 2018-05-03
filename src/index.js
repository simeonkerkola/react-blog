import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css';

import AppRouter from './Routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

import './styles/styles.css';

const jsx = <AppRouter />;

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
