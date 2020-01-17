export const AXIOS_EXAMPLE_VALID =
`// NOTE: make Axios library available first by fetching over the web
// fetch('https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.1/axios.min.js')
// fetch('https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.1/axios.js')
// fetch('https://unpkg.com/axios/dist/axios.min.js')
fetch('https://raw.githubusercontent.com/axios/axios/master/dist/axios.js')
	.then(resp => resp.text())
	.then(respText => {
		// console.log(respText)
		eval(respText) // NOTE: execute Axios library code dynamically

		// const axios = require('axios')
		// import axios from 'axios'
		// import axios
		// import('axios')

		if (typeof axios === 'undefined' && typeof window.axios === 'undefined') {
			alert('failed to load axios dynamically')
			return
		}

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
