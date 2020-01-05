export const EXAMPLE_VALID_NATIVE_PROMISE =
`const p = new Promise((resolve, reject) => { resolve({ msg: 'from resolve' }) })

alert('promise created')

p.then(({ error, msg }) => {
	if (error) {
		throw new Error(error)
	}
	alert(\`inside then... resolution.msg=\${msg}...\`)
}).catch(err => {
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
}).catch(err => {
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
}).catch(err => {
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
}).catch(err => {
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
}).catch(err => {
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
}).catch(err => {
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
}).catch(err => {
	alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
})
`
