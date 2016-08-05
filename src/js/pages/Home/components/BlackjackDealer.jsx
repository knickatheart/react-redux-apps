import React, { Component } from 'react'

import { connect } from 'react-redux'

import { start, generate } from '../../../actions/cards.jsx'

class BlackjackDealer extends Component {
	componentWillMount() {
		this.props.dispatch(generate())
		this.props.dispatch(start())
	}

	render() {
		let picks = this.props.own.map((elem, key) => {
			return (
				<div key={key}>
					<p className="card-text">{elem.key} of {elem.suit}</p>
				</div>
			)
		})

		return (
			<div className="joker col-sm-6">
				<div className="card">
					<img className="card-img-top img-fluid" src="../../../../images/joker.png" />
					<div className="card-block text-xs-center">
						<h4 className="card-title">Joker</h4>
						{picks}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		own: state.cards.random ? state.cards.random.dealer.cards : []
	}
}

export default connect(mapStateToProps)(BlackjackDealer)