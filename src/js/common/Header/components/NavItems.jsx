import React, { Component } from 'react'

import { Link } from 'react-router'

export default class NavItems extends Component {
	render() {
		return (
			<div className="nav navbar-nav">
				<Link to="/" className="nav-item nav-link logo" activeClassName="active">
					<img src="../../../../images/cloud-logo.png" alt="airstore logo" />
				</Link>
				<Link to="/store" className="nav-item nav-link" activeClassName="active">Store</Link>
				<Link to="/todo" className="nav-item nav-link" activeClassName="active">Todo</Link>
				<Link to="/timeline" className="nav-item nav-link" activeClassName="active">Timeline</Link>
				<Link to="/blackjack" className="nav-item nav-link" activeClassName="active">Blackjack</Link>
			</div>
		)
	}
}