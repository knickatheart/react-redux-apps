import React, { Component } from 'react'

import { connect } from 'react-redux'

import { add, remove } from '../../../actions/cart.jsx'

import $ from 'jquery'

export default class StoreSku extends Component {
	componentDidMount() {
		$('p.card-text').tooltip()
	}

	render() {
		let button;

		return (
			<div className="card">
			  <div className="card-block">
			    <h4 className="card-title">{this.props.sku.title}</h4>
			    <h6 className="card-subtitle text-muted">{this.props.sku.location}</h6>
			  </div>
			  <img className="img-fluid" src={this.props.sku.image} alt="Card image" />
			  <div className="card-block">
			    <p className="card-text" data-toggle="tooltip" data-placement="bottom" title={this.props.sku.text}>{this.props.sku.text}</p>
			    <p className="text-muted">{this.props.sku.price}</p>

			    {this.props.isCart ? 
		    		<button className="btn btn-default btn-lg" href="#" ref={node => { button = node }} onClick={e => {
				    	e.preventDefault()

				    	button.disabled = true, button.innerHTML = 'Removed'

				    	this.props.dispatch(remove(this.props.sku.id))
				    }}>Remove</button> :
		    		<button className="btn btn-default btn-lg" href="#" ref={node => { button = node }} onClick={e => {
				    	e.preventDefault()

				    	$('html, body').animate({ scrollTop: $('.cart').offset().top }, 200)

				    	this.props.dispatch(add(this.props.sku))
				    }}>Add to Cart</button>
			    }

			  </div>
			</div>
		)
	}
}

export default connect()(StoreSku)