import React, { FC, useEffect } from 'react'

// resources
import logo from './logo.svg'

import './App.css'

interface IResolution {
	error?: string
	msg: string
}

const App: FC = () => {
	useEffect(() => {
		const token = '[useEffect | App]'
		console.info(`${token} mounting...`)

		// NOTE: VALID way to create resolved promise
		const p: Promise<IResolution> = new Promise((resolve, reject) => { resolve({ msg: 'from resolve' }) })
		//
		// Equivalent to (because reject is unused, and single arg funcs require no parens):
		// const p: Promise<IResolution> = new Promise(resolve => { resolve({ msg: 'from resolve' }) })

		// NOTE: VALID way to create rejected promise
		// const p: Promise<IResolution> = new Promise((resolve, reject) => { reject({ error: 'from reject' }) })

		// NOTE: invalid because of TSC: Argument of type '5' is not assignable to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
		// const p: Promise<IResolution> = new Promise((resolve, reject) => { resolve(5) })

		// NOTE: is NOT invalid because return type allows undefined
		// WARNING: does NOT match expected return type on resolution
		// const p: Promise<IResolution> = new Promise((resolve, reject) => { resolve() })

		// NOTE: is NOT invalid because return type allows undefined
		// WARNING: leaves promise unresolved AND unrejected - causes problems
		// const p: Promise<IResolution> = new Promise((resolve, reject) => { return })
		//
		// Equivalent to
		// const p: Promise<IResolution> = new Promise((resolve, reject) => {})

		console.info(`${token} promise created`)

		p.then(({ error, msg }) => {
			if (error) {
				throw new Error(error)
			}
			console.info(`${token} inside then... resolution.msg=${msg}...`)
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
