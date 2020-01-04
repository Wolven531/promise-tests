import React, { FC, useEffect } from 'react'

// utils
import { setPageTitle } from './utils'

// resources
import logo from './logo.svg'

interface ISimpleAppProps {
	pageTitle: string
}

const SimpleAppContent: FC<ISimpleAppProps> = (props) => {
	useEffect(() => {
		setPageTitle(props.pageTitle)
	}, [props.pageTitle])

	return (
		<div className="app">
			<header className="app-header">
				<img src={logo} className="app-logo" alt="logo" />
				<h1>{props.pageTitle}</h1>
				<p>Hit F12 to open the developer console and see how the Promise executed</p>
				{props.children !== undefined && props.children}
			</header>
		</div>
	)
}

export { SimpleAppContent }
