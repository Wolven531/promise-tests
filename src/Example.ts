class Example {
	/**
	 * @param text The snippet of JS that constitutes the example
	 * @param summary A brief summary of the example
	 * @param description An optional detailed explanation of the example
	 */
	constructor(
		public text: string,
		public summary: string,
		public description = ''
		) { }
}

export { Example }
