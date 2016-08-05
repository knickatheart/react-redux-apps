import React from 'react'

import Dealer from '../components/BlackjackDealer.jsx'
import Playground from '../components/BlackjackPlayground.jsx'
import Player from '../components/BlackjackPlayer.jsx'

const Blackjack = () => {
	return (
		<div className="container blackjack">
			<div className="row">
				<Dealer />
			</div>
			<div className="row">
				<Playground />
			</div>
			<div className="row">
				<Player />
			</div>
		</div>
	)
}

export default Blackjack