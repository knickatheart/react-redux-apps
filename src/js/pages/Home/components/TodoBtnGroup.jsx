import React, { Component } from 'react'

import { connect } from 'react-redux'

import FilterLink from './parts/TodoFilterLink.jsx'

class TodoBtnGroup extends Component {
	counter(type) {
		let count = 0

		const allTodos = this.props.list.allIds.map(id => this.props.list.byId[id])

		switch (type) {
			case 1:
				return allTodos.length
			case 2:
				allTodos.map(elem => { if (!elem.completed) count++ } )
				return count
			case 3:
				allTodos.map(elem => { if (elem.completed) count++ } )
				return count
			default:
				return 0	
		}
	}

	render() {
		return (
			<div className="btn-group" data-toggle="buttons">
				<FilterLink filter="SHOW_ALL" currentFilter={this.props.filter}>
					All <span className="tag tag-info">{this.counter(1)}</span>
				</FilterLink>
				<FilterLink filter="SHOW_ACTIVE" currentFilter={this.props.filter}>
					Active <span className="tag tag-info">{this.counter(2)}</span>
				</FilterLink>
				<FilterLink filter="SHOW_COMPLETED" currentFilter={this.props.filter}>
					Completed <span className="tag tag-info">{this.counter(3)}</span>
				</FilterLink>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({ list: state.list, filter: state.filter })

export default connect(mapStateToProps)(TodoBtnGroup)