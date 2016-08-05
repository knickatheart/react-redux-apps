import React, { Component } from 'react'

// Common
import Header from '../../common/Header/Main.jsx'
import Banner from '../../common/Banner/Main.jsx'

const Main = () => {
	return (
		<div>
			<Header />
			<Banner error={true} />
		</div>
	)
}

export default Main