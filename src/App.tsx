import React, { FC, useState } from 'react'

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
	{
		description: '',
		summary: 'A Valid Resolved Native Promise using JS',
		text: EXAMPLE_VALID_NATIVE_PROMISE
	},
	{
		description: 'This form uses a single argument',
		summary: 'A Valid Resolved Native Promise using JS',
		text: EXAMPLE_VALID_NATIVE_PROMISE_SINGLE_ARG
	},
	{
		description: '',
		summary: 'A Valid Rejected Native Promise using JS',
		text: EXAMPLE_VALID_NATIVE_PROMISE_REJECTED
	},
	{
		description: 'This promise will resolve with the wrong value type',
		summary: 'An Invalid Native Promise using JS',
		text: EXAMPLE_INVALID_NATIVE_PROMISE
	},
	{
		description: 'This promise will resolve with undefined',
		summary: 'An Invalid Native Promise using JS',
		text: EXAMPLE_INVALID_NATIVE_PROMISE_UNDEFINED
	},
	{
		description: 'This promise will never resolve',
		summary: 'An Invalid Native Promise using JS',
		text: EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED
	},
	{
		description: 'This promise will also never resolve',
		summary: 'An Invalid Native Promise using JS',
		text: EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED_2
	}
]

const App: FC<any> = () => {
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
		<SimpleAppContent pageTitle={'App (Examples using native Promises)'}>
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

export default App
