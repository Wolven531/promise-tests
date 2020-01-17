export const AXIOS_EXAMPLE_VALID =
`// NOTE: make require library available first by fetching over the web
fetch('https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js')
	.then(resp => resp.text())
	.then(requireScript => {
		try {
			eval(requireScript) // NOTE: execute require library code dynamically
		} catch (err) {
			alert('failed to eval require library', err)
		}

		// NOTE: make Axios library available first by fetching over the web
		return fetch('https://raw.githubusercontent.com/axios/axios/master/dist/axios.js')
	})
	.then(resp => resp.text())
	.then(axiosScript => {
		try {
			eval(axiosScript) // NOTE: execute Axios library code dynamically
		} catch (err) {
			alert('failed to eval axios library', err)
		}

		if (typeof require === 'undefined' && typeof window.require === 'undefined') {
			alert('failed to load require dynamically')
			return
		}
		if (typeof axios === 'undefined' && typeof window.axios === 'undefined') {
			alert('failed to load axios dynamically')
			return
		}

		const axios = require('axios')

		// NOTE: VALID way to create resolved promise
		const p = axios.get('https://api.github.com/users/wolven531/repos')

		alert('promise created')

		p.then(({ data, status, statusText }) => {
			if (status !== 200) {
				throw new Error(statusText)
			}
			alert(\`inside then... resolution.data=\${data}...\`)
		})
		.catch(err => {
			alert(\`an error occured... \\n\\n\${ JSON.stringify(err, null, 4) }\`)
		})
		.finally()
	})
`
