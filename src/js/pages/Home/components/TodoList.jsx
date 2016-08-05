import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../actions/todo.jsx'

import getVisibleTodos from '../../../utils/getVisibleTodos.jsx'

class TodoList extends Component {
	render() {
		const visibleTodos = getVisibleTodos(this.props.list, this.props.filter)

		return (
			<ul className="list-unstyled">
				{visibleTodos ?
					visibleTodos.map((elem, key) => {
						let style = { textDecoration: (elem.completed) ? 'line-through' : 'none', cursor: 'pointer' }
						let classProps = elem.completed ? 'list-item text-uppercase text-muted' : 'list-item text-uppercase'

						return <li key={elem.id} style={style} className={classProps} onClick={e => {
							e.preventDefault()

							this.props.dispatch(actions.toggle(elem.id))
						}}>{elem.text}</li>
					})
					: <li className="list-item text-muted">Empty</li>
				}
			</ul>
		)
	}
}

const mapStateToProps = (state) => ({
	filter: state.filter,
	list: state.list,
	dispatch: state.dispatch
})

export default connect(mapStateToProps)(TodoList)