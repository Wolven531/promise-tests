import React, { FC, useEffect } from 'react'

// utils
import { IResolution } from './utils'

// local
import { SimpleAppContent } from './SimpleAppContent'

import './App.css'

const EXAMPLE_VALID_NATIVE_PROMISE =
`const p: Promise<IResolution> = new Promise((resolve, reject) => { resolve({ msg: 'from resolve' }) })

console.info(\`\${token} promise created\`)

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	console.info(\`\${token} inside then... resolution.msg=\${msg}...\`)
}).catch(err => {
	console.error(\`\${token} an error occured...\`, JSON.stringify(err, null, 4))
})
`

const App: FC<any> = () => {
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
		<SimpleAppContent pageTitle={'App (Example - using native Promises)'}>
			<textarea
				cols={120}
				readOnly={true}
				rows={13}
				value={EXAMPLE_VALID_NATIVE_PROMISE}
			/>
		</SimpleAppContent>
	)
}

export default App
