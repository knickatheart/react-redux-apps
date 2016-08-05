import React from 'react'

import NavItems from '../Components/NavItems.jsx'

const StickyNav = () => {
	return (
		<div className="sticky-nav">
			<nav className="navbar navbar-dark bg-primary">
				<NavItems />
			</nav>
		</div>
	)
}

export default StickyNav