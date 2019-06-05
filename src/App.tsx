import React, { useEffect } from 'react'

// resources
import logo from './logo.svg'

import './App.css'

interface IResolution {
	error?: string
	msg: string
}

const App: React.FC = () => {
	useEffect(() => {
		const token = '[useEffect | App]'
		console.info(`${token} mounting...`)

		const p: Promise<any> = new Promise((resolve, reject) => { resolve({ msg: 'from resolve' }) })
		// const p: Promise<any> = new Promise((resolve, reject) => { reject({ error: 'from reject' }) })

		console.info(`${token} promise created`)

		p.then((resolution: IResolution) => {
			if (resolution.error) {
				throw new Error(resolution.error)
			}
			console.info(`${token} inside then... resolution.msg=${resolution.msg}...`)
		}).catch(err => {
			console.error(`${token} an error occured...`, JSON.stringify(err, null, 4))
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
