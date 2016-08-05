import React, { Component } from 'react'

import JumboContent from '../components/JumboContent.jsx'

export default class Jumbotron extends Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid bg-primary">
				<JumboContent error={this.props.error} />
			</div>
		)
	}
}