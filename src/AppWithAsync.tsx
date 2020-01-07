import React, { FC, useState } from 'react'

// local
import {
	ASYNC_EXAMPLE_VALID
} from './examples'

import { Example } from './Example'
import { SimpleAppContent } from './SimpleAppContent'

import './App.css'

const examples: Example[] = [
	new Example(ASYNC_EXAMPLE_VALID, 'A Valid Promise using async / await')
]

const AppWithAsync: FC<any> = () => {
	// useEffect(() => {
	// 	const token = '[useEffect | AppWithAsync]'
	// 	console.info(`${token} mounting...`)

	// 	const someAsyncFunc = async () => ({ msg: 'from resolve' })
	// 	const p: Promise<IResolution> = someAsyncFunc()

	// 	// IIFE form (Immediately Invoked Function Expression)
	// 	// const p: Promise<IResolution> = (async () => ({ msg: 'from resolve' }))()

	// 	// NOTE: invalid because of TSC: Argument of type '5' is not assignable to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
	// 	// const p: Promise<IResolution> = (async () => 5)()

	// 	// NOTE: invalid because return type is void
	// 	// const p: Promise<IResolution> = (async () => { return })()

	// 	console.info(`${token} promise created`)

	// 	p.then(({ error, msg }) => {
	// 		if (error) {
	// 			throw new Error(error)
	// 		}
	// 		console.info(`${token} inside then... resolution.msg=${msg}...`)
	// 	})
	// 	.catch(rejectionReason => { console.error(`${token} promise rejected...`, JSON.stringify(rejectionReason, null, 4)) })
	// }, [])

	const [currentExampleIndex, setCurrentExampleIndex] = useState(0)
	const handleClickNext = () => {
		setCurrentExampleIndex(oldIndex => (oldIndex + 1) % examples.length)
	}
	const handleClickPrevious = () => {
		setCurrentExampleIndex(oldIndex => {
			let newVal = oldIndex - 1

			if (newVal < 0) {
				newVal = examples.length - 1
			}

			return newVal
		})
	}
	const handleClickRun = () => {
		try {
			/* eslint no-eval: 0 */
			eval(examples[currentExampleIndex].text)
		} catch (err) {
			alert(err)
		}
	}
	const currentExample = examples[currentExampleIndex]

	return (
		<SimpleAppContent pageTitle={'AppWithAsync (Examples using await / async keywords)'}>
			<section className="btn-controls">
				<button className="btn-change-example prev"
					onClick={handleClickPrevious}
					>
					Previous Example
				</button>
				<button className="btn-change-example next"
					onClick={handleClickNext}
					>
					Next Example
				</button>
			</section>
			<h3>Example {currentExampleIndex + 1} - {currentExample.summary}</h3>
			{currentExample.description.length > 0 && <h5>{currentExample.description}</h5>}
			<textarea
				cols={120}
				readOnly={true}
				rows={15}
				style={{ margin: 25 }}
				value={currentExample.text}
			/>
			<button className="btn-run-example"
				onClick={handleClickRun}
				>
				Run Example
			</button>
		</SimpleAppContent>
	)
}

export default AppWithAsync
