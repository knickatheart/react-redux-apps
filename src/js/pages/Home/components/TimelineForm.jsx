import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../../actions/post.jsx'

class TimelineForm extends Component {
	render() {
		let name, text
		
		return (
			<div className="card-block">
		   		<form onSubmit={e => {
					e.preventDefault()

					if (!name.value.trim() || !text.value.trim()) {
						return
					}

					this.props.dispatch(addPost({ name: name.value, text: text.value }))

					name.value = ''
					text.value = ''
				}}>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="name.." ref={node => {
							name = node
						}} />
					</div>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="post.." ref={node => {
							text = node
						}} />
					</div>
					<div className="form-group">
				        <button className="btn btn-default btn-lg" type="submit">Send!</button>
				    </div>
				</form>
		  	</div>
		)
	}
}

export default connect()(TimelineForm)