import React, { FC } from 'react'

// local
import {
	ASYNC_EXAMPLE_INVALID_PROMISE,
	ASYNC_EXAMPLE_INVALID_VOID,
	ASYNC_EXAMPLE_VALID,
	ASYNC_EXAMPLE_VALID_IIFE,
	ASYNC_EXAMPLE_VALID_REJECTED
} from './examples/examplesAsync'

import { Example } from './Example'
import { ExampleViewer } from './ExampleViewer'

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
	return <ExampleViewer
		examples={examples}
		title={'AppWithAsync (Examples using await / async keywords)'} />
}

export default AppWithAsync
