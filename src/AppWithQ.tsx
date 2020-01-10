import React, { FC, useState } from 'react'

// local
import {
	Q_EXAMPLE_INVALID_PROMISE,
	Q_EXAMPLE_INVALID_PROMISE_UNDEFINED,
	Q_EXAMPLE_INVALID_PROMISE_UNDEFINED_USING_RESOLVE,
	Q_EXAMPLE_INVALID_PROMISE_UNRESOLVED,
	Q_EXAMPLE_INVALID_PROMISE_UNRESOLVED_2,
	Q_EXAMPLE_VALID,
	Q_EXAMPLE_VALID_REJECTED,
	Q_EXAMPLE_VALID_SINGLE_ARG,
	Q_EXAMPLE_VALID_USING_REJECT,
	Q_EXAMPLE_VALID_USING_RESOLVE
} from './examples/examplesQ'

import { Example } from './Example'
import { SimpleAppContent } from './SimpleAppContent'

import './App.css'

const examples: Example[] = [
	new Example(Q_EXAMPLE_VALID, 'A Valid Resolved Promise using the Q Library')
]

const AppWithQ: FC<any> = () => {
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
		<SimpleAppContent pageTitle={'AppWithQ (Examples using Q Promise library)'}>
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

export default AppWithQ
