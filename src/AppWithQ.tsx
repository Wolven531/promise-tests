import React, { FC, useEffect } from 'react'

import {
	Promise as QPromise,
	// reject as qReject,
	resolve as qResolve
} from 'q'

// utils
import { IResolution } from './utils'

// local
import { SimpleAppContent } from './SimpleAppContent'

import './App.css'

const AppWithQ: FC<any> = () => {
	useEffect(() => {
		const token = '[useEffect | AppWithQ]'
		console.info(`${token} mounting...`)

		// NOTE: VALID way to create resolved promise
		// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { resolve({ msg: 'from resolve' }) })
		//
		// Equivalent to (because reject is unused, and single arg funcs require no parens):
		// const p: QPromise<IResolution> = QPromise(resolve => { resolve({ msg: 'from resolve' }) })
		//
		// Equivalent to
		const p: QPromise<IResolution> = qResolve({ msg: 'from resolve' })

		// NOTE: VALID way to create rejected promise
		// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { reject({ error: 'from reject' }) })
		//
		// Equivalent to
		// const p: QPromise<IResolution> = qReject({ error: 'from reject' })

		// NOTE: invalid because of TSC: Argument of type '5' is not assignable to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
		// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { resolve(5) })

		// NOTE: is NOT invalid because return type allows undefined
		// WARNING: does NOT match expected return type on resolution
		// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { resolve() })
		//
		// Equivalent to
		// const p: QPromise<IResolution> = qResolve()

		// NOTE: is NOT invalid because return type allows undefined
		// WARNING: leaves promise unresolved AND unrejected - causes problems
		// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => { return })
		//
		// Equivalent to
		// const p: QPromise<IResolution> = QPromise((resolve, reject, notify) => {})

		console.info(`${token} promise created`)

		p.then(({ error, msg }) => {
			if (error) {
				throw new Error(error)
			}
			console.info(`${token} inside then... resolution.msg=${msg}...`)
		})
		.progress(progress => { console.info(`${token} progress=${progress}`) })
		.fail(rejectionReason => { console.error(`${token} promise rejected...`, JSON.stringify(rejectionReason, null, 4)) })
		.done()
	}, [])

	return <SimpleAppContent pageTitle={'AppWithQ (Example - using Q Promise library)'} />
}

export default AppWithQ
