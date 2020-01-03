import React, { FC } from 'react'

// resources
import logo from './logo.svg'

const SimpleAppContent: FC<any> = (props) => {
	return (
		<div className="app">
			<header className="app-header">
				<img src={logo} className="app-logo" alt="logo" />
			</header>
		</div>
	)
}

export { SimpleAppContent }
