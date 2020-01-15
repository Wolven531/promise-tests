import React, { FC, useState } from 'react'

// local
import { Example } from '../Example'
import { SimpleAppContent } from '../SimpleAppContent'

import './ExampleViewer.css'

export interface IExampleViewerProps {
	examples: Example[]
	title: string
}

const SIZE_COMPACT = 52
const SIZE_DEVELOPER = 120
const SIZE_NORMAL = 80

const ExampleViewer: FC<any> = props => {
	const [currentEditorSize, setCurrentEditorSize] = useState(SIZE_COMPACT)
	const [currentExampleIndex, setCurrentExampleIndex] = useState(0)
	const handleClickNext = () => {
		setCurrentExampleIndex(oldIndex => (oldIndex + 1) % props.examples.length)
	}
	const handleClickPrevious = () => {
		setCurrentExampleIndex(oldIndex => {
			let newVal = oldIndex - 1

			if (newVal < 0) {
				newVal = props.examples.length - 1
			}

			return newVal
		})
	}
	const handleClickRun = () => {
		try {
			/* eslint no-eval: 0 */
			eval(props.examples[currentExampleIndex].text)
		} catch (err) {
			alert(err)
		}
	}
	const currentExample = props.examples[currentExampleIndex]

	return (
		<article className="example-viewer">
			<SimpleAppContent pageTitle={props.title}>
				<section className="btn-controls">
					<button className="btn-change-example prev"
						onClick={handleClickPrevious}
						>
						Previous
					</button>
					<button className="btn-change-example next"
						onClick={handleClickNext}
						>
						Next
					</button>
				</section>
				<h3>Example {currentExampleIndex + 1} - {currentExample.summary}</h3>
				{currentExample.description.length > 0 && <h5>{currentExample.description}</h5>}
				<textarea
					className="example-txt"
					cols={currentEditorSize}
					readOnly={true}
					rows={15}
					value={currentExample.text}
					wrap="soft" // 'soft' | 'hard'
				/>
				<section className="editor-controls">
					<button
						className="compact"
						onClick={() => { setCurrentEditorSize(SIZE_COMPACT) }}>Compact</button>
					<button
						className="normal"
						onClick={() => { setCurrentEditorSize(SIZE_NORMAL) }}>Normal</button>
					<button
						className="developer"
						onClick={() => { setCurrentEditorSize(SIZE_DEVELOPER) }}>Developer</button>
				</section>
				<button className="btn-run-example"
					onClick={handleClickRun}
					>
					Execute
				</button>
			</SimpleAppContent>
		</article>
	)
}

export { ExampleViewer }
