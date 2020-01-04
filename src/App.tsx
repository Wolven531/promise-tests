import React, { FC, useEffect, useState } from 'react'

// utils
import { IResolution } from './utils'

// local
import {
	EXAMPLE_INVALID_NATIVE_PROMISE,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNDEFINED,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED_2,
	EXAMPLE_VALID_NATIVE_PROMISE,
	EXAMPLE_VALID_NATIVE_PROMISE_REJECTED,
	EXAMPLE_VALID_NATIVE_PROMISE_SINGLE_ARG
} from './examples'
import { SimpleAppContent } from './SimpleAppContent'

import './App.css'

const examples = [
	EXAMPLE_VALID_NATIVE_PROMISE,
	EXAMPLE_VALID_NATIVE_PROMISE_SINGLE_ARG,
	EXAMPLE_VALID_NATIVE_PROMISE_REJECTED,
	EXAMPLE_INVALID_NATIVE_PROMISE,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNDEFINED,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED_2
]

const App: FC<any> = () => {
	const [currentExampleIndex, setCurrentExampleIndex] = useState(0)

	useEffect(() => {
		const token = '[useEffect | App]'
		console.info(`${token} mounting...`)

		const p: Promise<IResolution> = new Promise((resolve, reject) => { resolve({ msg: 'from resolve' }) })

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
			<button style={{
					borderColor: '#333',
					borderRadius: 15,
					borderWidth: 1,
					color: '#333',
					fontSize: 18,
					fontWeight: 'bold',
					height: 50,
					padding: 5,
					width: 200
				}}
				onClick={() => { setCurrentExampleIndex(oldIndex => (oldIndex + 1) % examples.length) }}
				>
				Next Example
			</button>
			<h2>Example {currentExampleIndex + 1}</h2>
			<textarea
				cols={120}
				readOnly={true}
				rows={15}
				style={{ marginBottom: 50 }}
				value={examples[currentExampleIndex]}
			/>
		</SimpleAppContent>
	)
}

export default App
