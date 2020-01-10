import React, { FC, useState } from 'react'

// import {
// 	Promise as QPromise,
// 	// reject as qReject,
// 	resolve as qResolve
// } from 'q'

// local
import {
	Q_EXAMPLE_VALID
} from './examples/examplesQ'

import { Example } from './Example'
import { SimpleAppContent } from './SimpleAppContent'

import './App.css'

const examples: Example[] = [
	new Example(Q_EXAMPLE_VALID, 'A Valid Resolved Promise using the Q Library')
]

const AppWithQ: FC<any> = () => {
	// useEffect(() => {
	// 	const token = '[useEffect | AppWithQ]'
	// 	console.info(`${token} mounting...`)

	// 	// NOTE: VALID way to create resolved promise
	// 	// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { resolve({ msg: 'from resolve' }) })
	// 	//
	// 	// Equivalent to (because reject is unused, and single arg funcs require no parens):
	// 	// const p: QPromise<IResolution> = QPromise(resolve => { resolve({ msg: 'from resolve' }) })
	// 	//
	// 	// Equivalent to
	// 	const p: QPromise<IResolution> = qResolve({ msg: 'from resolve' })

	// 	// NOTE: VALID way to create rejected promise
	// 	// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { reject({ error: 'from reject' }) })
	// 	//
	// 	// Equivalent to
	// 	// const p: QPromise<IResolution> = qReject({ error: 'from reject' })

	// 	// NOTE: invalid because of TSC: Argument of type '5' is not assignable to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
	// 	// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { resolve(5) })

	// 	// NOTE: is NOT invalid because return type allows undefined
	// 	// WARNING: does NOT match expected return type on resolution
	// 	// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { resolve() })
	// 	//
	// 	// Equivalent to
	// 	// const p: QPromise<IResolution> = qResolve()

	// 	// NOTE: is NOT invalid because return type allows undefined
	// 	// WARNING: leaves promise unresolved AND unrejected - causes problems
	// 	// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { return })
	// 	//
	// 	// Equivalent to
	// 	// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => {})

	// 	console.info(`${token} promise created`)

	// 	p.then(({ error, msg }) => {
	// 		if (error) {
	// 			throw new Error(error)
	// 		}
	// 		console.info(`${token} inside then... resolution.msg=${msg}...`)
	// 	})
	// 	.progress(progress => { console.info(`${token} progress=${progress}`) })
	// 	.fail(rejectionReason => { console.error(`${token} promise rejected...`, JSON.stringify(rejectionReason, null, 4)) })
	// 	.done()
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
