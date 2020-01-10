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
