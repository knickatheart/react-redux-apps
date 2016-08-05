import React from 'react'

import $ from 'jquery'
window.$, window.jQuery = $

import { render } from 'react-dom'

import { Router, Route, browserHistory } from 'react-router'

import { Provider } from 'react-redux'

// Pages
import Home from './pages/Home/Main.jsx'
import NotFound from './pages/NotFound/Main.jsx'

// Containers
import Store from './pages/Home/containers/Store.jsx'
import Todo from './pages/Home/containers/Todo.jsx'
import Timeline from './pages/Home/containers/Timeline.jsx'
import Blackjack from './pages/Home/containers/Blackjack.jsx'

// Store
import { store } from './configs/store.jsx'

const Root = () => {
	$(document).ready(() => {
		window.Tether = require('tether')
		window.Bootstrap = require('bootstrap')

		render (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" component={Home}>
						<Route path="/store" component={Store}></Route>
						<Route path="/blackjack" component={Blackjack}></Route>
						<Route path="/todo" component={Todo}></Route>
						<Route path="/timeline" component={Timeline}></Route>
					</Route>
					<Route path="*" component={NotFound}></Route>
				</Router>
			</Provider>,
			document.getElementById('root')
		)
	})
}

new Root