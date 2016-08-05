import React, { Component } from 'react'

// Common
import Header from '../../common/Header/Main.jsx'
import Banner from '../../common/Banner/Main.jsx'
	
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Banner />

				<div className="container page">
					<ReactCSSTransitionGroup transitionName="pageTransition" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
						{React.Children.map(this.props.children, (child => React.cloneElement(child, { key: location.pathname })))}
					</ReactCSSTransitionGroup>
				</div>
			</div>
		)
	}
}