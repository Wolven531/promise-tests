export const EXAMPLE_VALID_NATIVE_PROMISE =
`const p: Promise<IResolution> = new Promise((resolve, reject) => { resolve({ msg: 'from resolve' }) })

console.info('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	console.info(\`inside then... resolution.msg=\${msg}...\`)
}).catch(err => {
	console.error('an error occured...', JSON.stringify(err, null, 4))
})
`

export const EXAMPLE_VALID_NATIVE_PROMISE_SINGLE_ARG =
`const p: Promise<IResolution> = new Promise(resolve => { resolve({ msg: 'from resolve' }) })

console.info('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	console.info(\`inside then... resolution.msg=\${msg}...\`)
}).catch(err => {
	console.error('an error occured...', JSON.stringify(err, null, 4))
})
`

export const EXAMPLE_VALID_NATIVE_PROMISE_REJECTED =
`const p: Promise<IResolution> = new Promise((resolve, reject) => { reject({ error: 'from reject' }) })

console.info('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	console.info(\`inside then... resolution.msg=\${msg}...\`)
}).catch(err => {
	console.error('an error occured...', JSON.stringify(err, null, 4))
})
`

export const EXAMPLE_INVALID_NATIVE_PROMISE =
`// NOTE: invalid because of TSC: Argument of type '5' is not assignable to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
const p: Promise<IResolution> = new Promise((resolve, reject) => { reject({ error: 'from reject' }) })

console.info('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	console.info(\`inside then... resolution.msg=\${msg}...\`)
}).catch(err => {
	console.error('an error occured...', JSON.stringify(err, null, 4))
})
`
