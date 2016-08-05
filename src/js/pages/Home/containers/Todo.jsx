import React from 'react'

import List from '../components/TodoList.jsx'
import Form from '../components/TodoForm.jsx'
import BtnGroup from '../components/TodoBtnGroup.jsx'

const Todo = () => {
	const style = { float: 'none', margin: '0 auto' }
	return (
		<div className="container todo">
			<div className="row">
				<div className="col-md-12" style={style}>
					<div className="card text-xs-center">
						<div className="card-header">
							<BtnGroup />
						</div>
						<div className="card-block">
							<List />
						</div>
						<div className="card-footer">
							<Form />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Todo