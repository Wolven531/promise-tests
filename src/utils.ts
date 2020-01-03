/**
 *
 * @param newTitle The value that will become the page title
 * @type string
 */
const setPageTitle = (newTitle: string) => {
	window.document.title = newTitle
}

export interface IResolution {
	error?: string
	msg: string
}

export { setPageTitle }
