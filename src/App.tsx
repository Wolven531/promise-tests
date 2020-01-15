import React, { FC } from 'react'

// local
import {
	EXAMPLE_INVALID_NATIVE_PROMISE,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNDEFINED,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED,
	EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED_2,
	EXAMPLE_VALID_NATIVE_PROMISE,
	EXAMPLE_VALID_NATIVE_PROMISE_REJECTED,
	EXAMPLE_VALID_NATIVE_PROMISE_SINGLE_ARG
} from './examples/examples'

import { Example } from './Example'
import { ExampleViewer } from './ExampleViewer/ExampleViewer'

import './App.css'

const examples = [
	new Example(EXAMPLE_VALID_NATIVE_PROMISE, 'A Valid Resolved Native Promise using JS'),
	new Example(
		EXAMPLE_VALID_NATIVE_PROMISE_SINGLE_ARG,
		'A Valid Resolved Native Promise using JS',
		'This form uses a single argument'),
	new Example(EXAMPLE_VALID_NATIVE_PROMISE_REJECTED, 'A Valid Rejected Native Promise using JS'),
	new Example(
		EXAMPLE_INVALID_NATIVE_PROMISE,
		'An Invalid Native Promise using JS',
		'This promise will resolve with the wrong value type'),
	new Example(
		EXAMPLE_INVALID_NATIVE_PROMISE_UNDEFINED,
		'An Invalid Native Promise using JS',
		'This promise will resolve with undefined'),
	new Example(
		EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED,
		'An Invalid Native Promise using JS',
		'This promise will never resolve'),
	new Example(
		EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED_2,
		'An Invalid Native Promise using JS',
		'This promise will also never resolve')
]

const App: FC<any> = () => {
	return <ExampleViewer
		examples={examples}
		title={'App (Examples using native Promises)'} />
}

export default App
