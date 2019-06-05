import React, { useEffect } from 'react'

// resources
import logo from './logo.svg'

import './App.css'

const App: React.FC = () => {
	useEffect(() => {
		const token = '[useEffect | App]'
		console.info(`${token} mounting...`)

		const p: Promise<any> = new Promise((resolve, reject) => { resolve({ msg: 'from resolve' }) })

		console.info(`${token} promise created`)

		p.then(resolution => {
			console.info(`${token} inside then... resolution.msg=${resolution.msg}...`)
		}).catch(err => {
			console.error(`${token} an error occured...`, err)
		})
	}, [])

	return (
		<div className="app">
			<header className="app-header">
				<img src={logo} className="app-logo" alt="logo" />
			</header>
		</div>
	)
}

export default App
