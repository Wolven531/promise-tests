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
const EDITOR_SIZES = [SIZE_COMPACT, SIZE_NORMAL, SIZE_DEVELOPER]

const ExampleViewer: FC<any> = props => {
	const [currentEditorSize, setCurrentEditorSize] = useState(0)
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
	const editorCols = EDITOR_SIZES[currentEditorSize]

	return (
		<article className="example-viewer">
			<SimpleAppContent pageTitle={props.title}>
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
					className="example-txt"
					cols={editorCols}
					readOnly={true}
					rows={15}
					value={currentExample.text}
					wrap="soft" // 'soft' | 'hard'
				/>
				<section>
					<button onClick={() => { setCurrentEditorSize(0) }}>Compact</button>
					<button onClick={() => { setCurrentEditorSize(1) }}>Normal</button>
					<button onClick={() => { setCurrentEditorSize(2) }}>Developer</button>
				</section>
				<button className="btn-run-example"
					onClick={handleClickRun}
					>
					Run Example
				</button>
			</SimpleAppContent>
		</article>
	)
}

export { ExampleViewer }
