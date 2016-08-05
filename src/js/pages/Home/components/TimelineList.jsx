import React, { Component } from 'react'

import { connect } from 'react-redux'

import { removePost } from '../../../actions/post.jsx'

import getAllPosts from '../../../utils/getAllPosts.jsx'

import $ from 'jquery'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
 
export default class TimelineList extends Component {
	componentDidMount() {
		$('p.card-text').tooltip()
	}

	componentDidUpdate() {
		$('html, body').animate({ scrollTop: $('.timeline-block').offset().top }, 200)
	}

	render() {
		const posts = getAllPosts(this.props.posts)

		return (
			<div className="timeline-block">
				<ReactCSSTransitionGroup transitionName="fadeTransition" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{(posts.reverse()).map((post) => {
						if (post) {
							return (
								<div className="card-block col-md-4 col-sm-6" key={post.id}>
							  		<div className="card">
										<img className="img-fluid" src="https://blog.hailoapp.com/wp-content/uploads/2014/09/API-BLOG.png" alt="Card image cap" />
										<div className="card-block text-xs-left">
											<h4 className="card-title">{post.name}</h4>
											<p className="card-text" data-toggle="tooltip" data-placement="bottom" title={post.text}>{post.text}</p>
											<a href="#" className="btn btn-danger" role="button" onClick={e => {
												e.preventDefault()

												this.props.dispatch(removePost(post))
											}}>	
												x
											</a>
										</div>
									</div>
								</div>
							)	
						}
					})}
				</ReactCSSTransitionGroup>	
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts
})

export default connect(mapStateToProps)(TimelineList)