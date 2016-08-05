import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../actions/todo.jsx'

class TodoForm extends Component {
	render() {
		let input

		return (
			<form className="form-group" onSubmit={e => {
				e.preventDefault()

				if (!input.value.trim()) {
					return
				}

				this.props.dispatch(actions.add(input.value))
				input.value = ''
			}}>
				<div className="input-group">
					<input className="form-control" type="text" placeholder="todo.." ref={node => {
						input = node
					}} />
					<span className="input-group-btn">
				        <button className="btn btn-primary" type="submit">Add!</button>
				    </span>
				</div>
			</form>	
		)
	}
}

export default connect()(TodoForm)