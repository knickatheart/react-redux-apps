import React, { Component } from 'react'

import Jumbotron from './containers/Jumbotron.jsx'

export default class Main extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="holy-ground"></div>
					<Jumbotron error={this.props.error} />
				</div>
			</div>
		)
	}
}