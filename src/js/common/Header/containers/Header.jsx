import React from 'react'

import NavItems from '../Components/NavItems.jsx'

const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-dark bg-primary">
				<NavItems />
			</nav>
		</header>
	)
}

export default Header