import React, { Component } from 'react'

import { connect } from 'react-redux'

import { initialize } from '../../../actions/cart.jsx'

import Sku from '../components/StoreSku.jsx'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class StoreCart extends Component {
	render() {
		const skus = this.props.allIds.map(id => this.props.byId[id])

		return (
			<div className="cart text-xs-center">
				<img className="img-fluid" src="../../../../images/cart.png" />
				<span className="tag tag-primary">{this.props.allIds.length}</span>

				<ReactCSSTransitionGroup transitionName="fadeTransition" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{skus.map((elem) => {
						return (
							<Sku key={elem.id} sku={elem} isCart={true} />
						)
					})}
				</ReactCSSTransitionGroup>	
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	byId: state.cart.cartById,
	allIds: state.cart.cartAllIds
})

export default connect(mapStateToProps)(StoreCart)