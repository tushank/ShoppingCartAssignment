import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import { BrowserRouter  } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
<BrowserRouter><App/></BrowserRouter>
</Provider>, document.getElementById('root'));