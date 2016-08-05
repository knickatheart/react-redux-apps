import React, { Component } from 'react'

import { connect } from 'react-redux'

import { randomize, stick } from '../../../../actions/cards.jsx'

class BlackjackActionLink extends Component {
	setTime() {
		this.interval = setInterval(() => {
  			this.stick.call(this)
  		}, 1000)
	}

	stick() {
		this.props.dispatch(stick(this.interval))
	}

	render() {
		const { dispatch, action, disabled } = this.props

		return (
			<button type="button" className="btn btn-primary" disabled={disabled} onClick={e => {
		  		e.preventDefault()

		  		action === 'HIT' ? dispatch(randomize()) : this.setTime.call(this)
		  	}}>{this.props.children}</button>
		)
	}
}

export default connect()(BlackjackActionLink)