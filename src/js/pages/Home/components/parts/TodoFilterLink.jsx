import React, { Component } from 'react'

import { setFilter } from '../../../../actions/filter.jsx'

import { connect } from 'react-redux'

class TodoFilterLink extends Component {
	render() {
		const { filter, children, currentFilter } = this.props
		let isDisabled = (filter === currentFilter) ? 'disabled' : ''

		return (
			<button type="button" className="btn btn-primary" disabled={isDisabled} onClick={e => {
		  		e.preventDefault()

		  		this.props.dispatch(setFilter(filter))
		  	}}>{children}</button>
		)
	}
}

export default connect()(TodoFilterLink)