export const ASYNC_EXAMPLE_VALID =
`const someAsyncFunc = async () => ({ msg: 'from resolve' })

// NOTE: in order to use await keyword, must be inside an async function
async function runExample() {
	try {
		alert('about to create promise...')

		const { error, msg } = await someAsyncFunc()

		if (error) {
			throw new Error(error)
		}
		alert(\`inside then... resolution.msg=\${msg}...\`)
	} catch(err) {
		alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
	}
}
runExample()
`

export const ASYNC_EXAMPLE_VALID_IIFE =
`// NOTE: in order to use await keyword, must be inside an async function
async function runExample() {
	try {
		alert('about to create promise...')

		// IIFE form (Immediately Invoked Function Expression)
		const { error, msg } = await (async () => ({ msg: 'from resolve' }))()

		if (error) {
			throw new Error(error)
		}
		alert(\`inside then... resolution.msg=\${msg}...\`)
	} catch(err) {
		alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
	}
}
runExample()
`

export const ASYNC_EXAMPLE_VALID_REJECTED =
`// NOTE: one way to create a rejected promise is to throw an Error during resolution
const someAsyncFunc = async () => { throw new Error('This error forces a rejection') }

// NOTE: in order to use await keyword, must be inside an async function
async function runExample() {
	try{
		alert('about to create promise...')

		const { error, msg } = await someAsyncFunc()

		if (error) {
			throw new Error(error)
		}
		alert(\`inside then... resolution.msg=\${msg}...\`)
	} catch(err) {
		alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
	}
}
runExample()
`

export const ASYNC_EXAMPLE_INVALID_PROMISE =
`// NOTE: in order to use await keyword, must be inside an async function
async function runExample() {
	try {
		alert('about to create promise...')

		// NOTE: invalid because of TSC: Argument of type '5' is not assignable
		// to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
		const { error, msg } = await (async () => 5)()

		if (error) {
			throw new Error(error)
		}
		alert(\`inside then... resolution.msg=\${msg}...\`)
	} catch(err) {
		alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
	}
}
runExample()
`

export const ASYNC_EXAMPLE_INVALID_VOID =
`// NOTE: in order to use await keyword, must be inside an async function
async function runExample() {
	try {
		alert('about to create promise...')

		// NOTE: invalid because return type is void
		const { error, msg } = await (async () => { return })()

		if (error) {
			throw new Error(error)
		}
		alert(\`inside then... resolution.msg=\${msg}...\`)
	} catch(err) {
		alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
	}
}
runExample()
`

export const EXAMPLE_VALID_NATIVE_PROMISE =
`const p = new Promise((resolve, reject) => { resolve({ msg: 'from resolve' }) })

alert('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	alert(\`inside then... resolution.msg=\${msg}...\`)
})
.catch(err => {
	alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
})
`

export const EXAMPLE_VALID_NATIVE_PROMISE_SINGLE_ARG =
`const p = new Promise(resolve => { resolve({ msg: 'from resolve' }) })

alert('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	alert(\`inside then... resolution.msg=\${msg}...\`)
})
.catch(err => {
	alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
})
`

export const EXAMPLE_VALID_NATIVE_PROMISE_REJECTED =
`const p = new Promise((resolve, reject) => { reject({ error: 'from reject' }) })

alert('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	alert(\`inside then... resolution.msg=\${msg}...\`)
})
.catch(err => {
	alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
})
`

export const EXAMPLE_INVALID_NATIVE_PROMISE =
`// NOTE: invalid because of TSC: Argument of type '5' is not assignable
// to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
const p = new Promise((resolve, reject) => { resolve(5) })

alert('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	alert(\`inside then... resolution.msg=\${msg}...\`)
})
.catch(err => {
	alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
})
`

export const EXAMPLE_INVALID_NATIVE_PROMISE_UNDEFINED =
`// NOTE: is NOT invalid because return type allows undefined
// WARNING: does NOT match expected return type on resolution
const p = new Promise((resolve, reject) => { resolve() })

alert('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	alert(\`inside then... resolution.msg=\${msg}...\`)
})
.catch(err => {
	alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
})
`

export const EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED =
`// NOTE: is NOT invalid because return type allows undefined
// WARNING: leaves promise unresolved AND unrejected - causes problems
const p = new Promise((resolve, reject) => { return })

alert('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	alert(\`inside then... resolution.msg=\${msg}...\`)
})
.catch(err => {
	alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
})
`

export const EXAMPLE_INVALID_NATIVE_PROMISE_UNRESOLVED_2 =
`// NOTE: is NOT invalid because return type allows undefined
// WARNING: leaves promise unresolved AND unrejected - causes problems
const p = new Promise((resolve, reject) => {})

alert('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	alert(\`inside then... resolution.msg=\${msg}...\`)
})
.catch(err => {
	alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
})
`

export const Q_EXAMPLE_VALID =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: VALID way to create resolved promise
		const p = Q.Promise((resolve, reject, notify) => { resolve({ msg: 'from resolve' }) })

		alert('promise created')

		p.then(({ error, msg }) => {
			if (error) {
				throw new Error(error)
			}
			alert(\`inside then... resolution.msg=\${msg}...\`)
		})
		.progress(progress => {
			console.info(\`progress=\${progress}\`)
		})
		.fail(err => {
			alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
		})
		.done()
	})
`
