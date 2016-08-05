import React, { Component } from 'react'

import { connect } from 'react-redux'

import ActionLink from './parts/BlackjackActionLink.jsx'

import { restart } from '../../../actions/cards.jsx'

class BlackjackPlayground extends Component {
	constructor(props) {
		super(props)

		this.playerTot = 0, this.dealerTot = 0
	}

	componentWillMount() {
		this.props.playerCards.map((card) => {
			this.playerTot = this.playerTot + card.value
		})

		this.props.dealerCards.map((card) => {
			this.dealerTot = this.dealerTot + card.value
		})
	}

	componentWillReceiveProps(props) {
		this.playerTot = props.playerPoints ? props.playerPoints : this.playerTot
		this.dealerTot = props.dealerPoints ? props.dealerPoints : this.dealerTot
	}

	clearTime() {
		clearInterval(this.props.timeout)

		this.disabled = true
	}

	decideWinner() {
		const WON = 'YOU WON', LOST = 'YOU LOST'

		this.disabled = (this.playerTot >= 21) ? true : false

		if (this.props.finished) {
			if (this.dealerTot >= 21) this.clearTime.call(this)

			if (this.dealerTot > this.playerTot && this.dealerTot <= 21) {
				this.result = LOST
				
				this.clearTime.call(this)
			} else {
				this.result = WON
			}
		} else {
			if (this.playerTot === 21 && this.playerTot > this.dealerTot) {
				this.result = WON
			} else {
				this.result = LOST
			}
		}
	}

	render() {
		this.decideWinner.call(this)

		return (
			<div className="table">
				<div className="btn-group" data-toggle="buttons">
					<ActionLink action="HIT" disabled={this.disabled}>
						Hit
					</ActionLink>
					<ActionLink action="STICK" disabled={this.disabled}>
						Stick
					</ActionLink>
				</div>
				<p>You have {this.playerTot} points</p>
				<p>The dealer has {this.dealerTot} points</p>
				{this.disabled ?
					<div>
						<h4 className="text-primary">{this.result}!<small> Game Over</small></h4>
						<div className="btn-group" data-toggle="buttons">
							<button type="button" className="btn btn-primary" onClick={e => {
						  		e.preventDefault()

						  		window.location = ''
						  	}}>Restart</button>
						</div>  	
					</div>
				: ''}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	playerCards: state.cards.random.player.cards,
	dealerCards: state.cards.random.dealer.cards,
	playerPoints: state.cards.random.player.points,
	dealerPoints: state.cards.random.dealer.points,
	finished: state.cards.finished,
	timeout: state.cards.timeout
})

export default connect(mapStateToProps)(BlackjackPlayground)