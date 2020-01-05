import React, { FC, useEffect } from 'react'

// utils
import { IResolution } from './utils'

// local
import { SimpleAppContent } from './SimpleAppContent'

import './App.css'

const AppWithAsync: FC<any> = () => {
	useEffect(() => {
		const token = '[useEffect | AppWithAsync]'
		console.info(`${token} mounting...`)

		const someAsyncFunc = async () => ({ msg: 'from resolve' })
		const p: Promise<IResolution> = someAsyncFunc()

		// IIFE form (Immediately Invoked Function Expression)
		// const p: Promise<IResolution> = (async () => ({ msg: 'from resolve' }))()

		// NOTE: invalid because of TSC: Argument of type '5' is not assignable to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
		// const p: Promise<IResolution> = (async () => 5)()

		// NOTE: invalid because return type is void
		// const p: Promise<IResolution> = (async () => { return })()

		console.info(`${token} promise created`)

		p.then(({ error, msg }) => {
			if (error) {
				throw new Error(error)
			}
			console.info(`${token} inside then... resolution.msg=${msg}...`)
		})
		.catch(rejectionReason => { console.error(`${token} promise rejected...`, JSON.stringify(rejectionReason, null, 4)) })
	}, [])

	return <SimpleAppContent pageTitle={'AppWithAsync (Examples using await / async keywords)'} />
}

export default AppWithAsync
