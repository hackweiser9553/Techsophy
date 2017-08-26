"use strict"
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import React from 'react';
import { render } from  'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import BooksList from './components/pages/booksList';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions'
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';

//step3 define reducers
//step1 create the reducers
const middleware =applyMiddleware(logger)
const store = createStore(reducers, middleware);
const Routes =(
	<Provider store ={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={BooksList} />
				<Route path='/admin' component={BooksForm}/>
				<Route path='/cart' component={Cart}/>
			</Route>	

		</Router>
		
	</Provider>	
)
render(
	Routes, document.getElementById('app')
);


//step2 create and dispatch actions



