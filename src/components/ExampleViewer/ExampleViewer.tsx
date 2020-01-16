import React, { FC, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// local
import { Example } from '../../models/Example'
import { SimpleAppContent } from '../SimpleAppContent/SimpleAppContent'

import './ExampleViewer.css'

export interface IExampleViewerProps {
	examples: Example[]
	title: string
}

const ExampleViewer: FC<any> = props => {
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
				<section className="editor-container">
					<SyntaxHighlighter
						language="javascript"
						showLineNumbers={true}
						style={atomOneDark}
					>{currentExample.text}</SyntaxHighlighter>
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
