import React from 'react'

import Form from '../components/TimelineForm.jsx'
import PostsList from '../components/TimelineList.jsx'

const Timeline = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card">
					  	<h3 className="card-header text-sm-center text-md-left">Write something special</h3>
					  	<Form />
					  	<PostsList />
					</div>
				</div>
			</div>
		</div>	
	)
}

export default Timeline