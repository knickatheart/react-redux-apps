import React, { Component } from 'react'

import { connect } from 'react-redux'

class BlackjackPlayer extends Component {
	render() {
		// only return unique values
		let own = [...new Set(this.props.own)]

		let picks = own.map((elem, key) => {
			return (
				<div key={key}>
					<p className="card-text">{elem.key} of {elem.suit}</p>
				</div>
			)
		})

		return (
			<div className="player col-sm-6">
				<div className="card">
					<div className="card-block text-xs-center">
						<h4 className="card-title">Jack Black</h4>
						{picks}
					</div>
					<img className="card-img-bottom img-fluid" src="../../../../images/jackblack.png" />
				</div>
			</div>	
		)
	}
}

const mapStateToProps = (state) => ({
	cards: state.cards,
	own: state.cards.random ? state.cards.random.player.cards : []
})

export default connect(mapStateToProps)(BlackjackPlayer)