import React, { Component } from 'react'
import $ from 'jquery'

export default class JumboContent extends Component {
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll.bind(this))
	}

	handleScroll() {
		const stickyNav = $('.sticky-nav')

		!this.isComponentInView.call(this) ? stickyNav.show() : stickyNav.hide()
	}

	isComponentInView() {
		try {
			let rect = this._container.getBoundingClientRect();
			return rect.top < window.innerHeight && rect.bottom > 0
		} catch (err) {
			// ignore the weird thrown errors
		}
	}

	render() {
		return (
			<div className="container" ref={r => this._container = r}>
				{this.props.error ?
					<div>
						<h1 className="display-3">404</h1>
						<p className="lead">Ops... Page not found.</p>
					</div>
					:
					<div>
						<h1 className="display-3">Welcome</h1>
						<p className="lead">This is a collection of applications, built following the Flux architecture, React and Redux are the stars of the show here. Other dependencies used are: Babel ES6, Webpack, NodeJS, ExpressJS, SCSS and Bootstrap 4.</p>
					</div>
				}
				<hr className="m-y-2" />
				<p>Navigate through the top navigation menu to select an inner route.</p>
			</div>
		)
	}
}