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
