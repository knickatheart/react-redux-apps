import React from 'react'

import Header from './containers/Header.jsx'

import StickyNav from './containers/StickyNav.jsx'

const Main = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<Header />
				<StickyNav />
			</div>
		</div>
	)
}

export default Main