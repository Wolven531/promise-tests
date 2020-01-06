class Example {
	/**
	 * @param text The snippet of JS that constitutes the example
	 * @type string
	 * @param summary A brief summary of the example
	 * @type string
	 * @param description An optional detailed explanation of the example
	 * @type string | undefined
	 */
	constructor(
		public text: string,
		public summary: string,
		public description = ''
		) {


	}
}

export { Example }
