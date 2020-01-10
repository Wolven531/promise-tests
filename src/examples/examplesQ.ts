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

export const Q_EXAMPLE_VALID_SINGLE_ARG =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: VALID way to create resolved promise (because reject is unused, single arg funcs require no parens)
		const p = Q.Promise(resolve => { resolve({ msg: 'from resolve' }) })

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

export const Q_EXAMPLE_VALID_USING_RESOLVE =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: VALID way to create resolved promise
		const p = Q.resolve({ msg: 'from resolve' })

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

export const Q_EXAMPLE_VALID_REJECTED =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: VALID way to create rejected promise
		const p = Q.Promise((resolve, reject, notify) => { reject({ error: 'from reject' }) })

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

export const Q_EXAMPLE_VALID_USING_REJECT =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: VALID way to create rejected promise
		const p = Q.reject({ error: 'from reject' })

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

export const Q_EXAMPLE_INVALID_PROMISE =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: invalid because of TSC: Argument of type '5' is not assignable
		// to parameter of type 'IResolution | PromiseLike<IResolution> | undefined'
		const p = Q.Promise((resolve, reject, notify) => { resolve(5) })

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

export const Q_EXAMPLE_INVALID_PROMISE_UNDEFINED =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: is NOT invalid because return type allows undefined
		// WARNING: does NOT match expected return type on resolution
		const p = Q.Promise((resolve, reject, notify) => { resolve() })

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

export const Q_EXAMPLE_INVALID_PROMISE_UNDEFINED_USING_RESOLVE =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: is NOT invalid because return type allows undefined
		// WARNING: does NOT match expected return type on resolution
		const p = Q.resolve()

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

export const Q_EXAMPLE_INVALID_PROMISE_UNRESOLVED =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: is NOT invalid because return type allows undefined
		// WARNING: leaves promise unresolved AND unrejected - causes problems
		const p = Q.Promise((resolve, reject, notify) => { return })

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

export const Q_EXAMPLE_INVALID_PROMISE_UNRESOLVED_2 =
`// NOTE: make Q library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/q.js/1.5.1/q.js')
	.then(resp => resp.text())
	.then(respText => {
		eval(respText) // NOTE: execute Q library code dynamically

		// NOTE: is NOT invalid because return type allows undefined
		// WARNING: leaves promise unresolved AND unrejected - causes problems
		const p = Q.Promise((resolve, reject, notify) => {})

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
