import React, { FC } from 'react'

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
import { ExampleViewer } from './ExampleViewer/ExampleViewer'

import './App.css'

const examples: Example[] = [
	// valid
	new Example(Q_EXAMPLE_VALID, 'A Valid Resolved Q Library Promise'),
	new Example(
		Q_EXAMPLE_VALID_SINGLE_ARG,
		'A Valid Resolved Q Library Promise',
		'This form uses a single argument'),
	new Example(
		Q_EXAMPLE_VALID_USING_RESOLVE,
		'A Valid Resolved Q Library Promise',
		'This example makes use of the static resolve() function'),
	new Example(
		Q_EXAMPLE_VALID_USING_REJECT,
		'A Valid Rejected Q Library Promise',
		'This example makes use of the static reject() function'),
	new Example(Q_EXAMPLE_VALID_REJECTED, 'A Valid Rejected Q Library Promise'),
	// invalid
	new Example(Q_EXAMPLE_INVALID_PROMISE, 'An Invalid Q Library Promise'),
	new Example(
		Q_EXAMPLE_INVALID_PROMISE_UNDEFINED,
		'An Invalid Q Library Promise',
		'This promise will resolve with undefined'),
	new Example(
		Q_EXAMPLE_INVALID_PROMISE_UNDEFINED_USING_RESOLVE,
		'An Invalid Q Library Promise',
		'This promise will resolve with undefined (uses the static resolve() function)'),
	new Example(
		Q_EXAMPLE_INVALID_PROMISE_UNRESOLVED,
		'An Invalid Q Library Promise',
		'This promise will never resolve'),
	new Example(
		Q_EXAMPLE_INVALID_PROMISE_UNRESOLVED_2,
		'An Invalid Q Library Promise',
		'This promise will also never resolve'),
]

const AppWithQ: FC<any> = () => {
	return <ExampleViewer
		examples={examples}
		title={'AppWithQ (Examples using Q Promise library)'} />
}

export default AppWithQ
