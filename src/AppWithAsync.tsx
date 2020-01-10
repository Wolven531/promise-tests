import React, { FC, useState } from 'react'

// local
import {
	ASYNC_EXAMPLE_INVALID_PROMISE,
	ASYNC_EXAMPLE_INVALID_VOID,
	ASYNC_EXAMPLE_VALID,
	ASYNC_EXAMPLE_VALID_IIFE,
	ASYNC_EXAMPLE_VALID_REJECTED
} from './examples/examplesAsync'

import { Example } from './Example'
import { SimpleAppContent } from './SimpleAppContent'

import './App.css'

const examples: Example[] = [
	new Example(ASYNC_EXAMPLE_VALID, 'A Valid Resolved Promise using async / await'),
	new Example(
		ASYNC_EXAMPLE_VALID_IIFE,
		'A Valid Resolved Promise using async / await',
		'This is IIFE form (Immediately Invoked Function Expression)'),
	new Example(
		ASYNC_EXAMPLE_VALID_REJECTED,
		'A Valid Rejected Promise using async / await',
		'This example throws an Error during resolution to force a rejection'),
	new Example(
		ASYNC_EXAMPLE_INVALID_PROMISE,
		'An Invalid Promise using async / await',
		'This promise will resolve with the wrong value type'),
	new Example(
		ASYNC_EXAMPLE_INVALID_VOID,
		'An Invalid Promise using async / await',
		'This promise will never resolve')
]

const AppWithAsync: FC<any> = () => {
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
