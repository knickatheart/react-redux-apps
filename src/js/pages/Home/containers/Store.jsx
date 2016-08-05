import React, { Component } from 'react'

import { connect } from 'react-redux'

import data from 'json!../../../../payload/items.json'

import Sku from '../components/StoreSku.jsx'

import Cart from './StoreCart.jsx'

const Store = () => {
	return (
		<div className="container">
			<div className="row" key="items">
				<div className="col-md-8">
					{data.map((elem, key) => {
						return (
							<div key={elem.id} className="col-lg-6">
								<Sku sku={elem} /> 
							</div>
						)
					})}
				</div>
				<div className="col-md-4">
					<Cart />
				</div>
			</div>
		</div>	
	)
}

export default Store