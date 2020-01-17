import React, { FC } from 'react'

// local
import {
	AXIOS_EXAMPLE_VALID
} from '../../examples/examplesAxios'

import { Example } from '../../models/Example'
import { ExampleViewer } from '../ExampleViewer/ExampleViewer'

import './App.css'

const examples: Example[] = [
	// valid
	new Example(AXIOS_EXAMPLE_VALID, 'A Valid Resolved Axios Library Promise')
]

const AppWithAxios: FC<any> = () => {
	return <ExampleViewer
		examples={examples}
		title={'Examples using Axios Promise library'} />
}

export default AppWithAxios
