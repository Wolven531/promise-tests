const fs = require('fs')
const path = require('path')

const FILENAME = 'package.json'

const REGEX_MAJOR_VERSION = /(\d+)\.\d+\.\d+/
const REGEX_MINOR_VERSION = /\d+\.(\d+)\.\d+/
const REGEX_PATCH_VERSION = /\d+\.\d+\.(\d+)/
const REGEX_VERSION = /\s+"version":\s+"(.+)",/

const filePath = path.join(__dirname, FILENAME)

if (!fs.existsSync(filePath)) {
	console.error(`"${FILENAME}" not found, bailing...`)
	return 1
}

console.log(`"${FILENAME}" found, reading contents...`)

// Open file for reading and writing
// fs.readFileSync(filePath, { encoding: 'UTF8', flag: 'r+' })
// Open file for reading
const packContents = fs.readFileSync(filePath, { encoding: 'UTF8', flag: 'r' })
const results = REGEX_VERSION.exec(packContents)

if (!results) {
	console.error(`"version" not found in "${FILENAME}", bailing...`)
	return 2
}

const currentVersion = results[1]
const major = parseInt(REGEX_MAJOR_VERSION.exec(currentVersion)[1], 10)
const minor = parseInt(REGEX_MINOR_VERSION.exec(currentVersion)[1], 10)
const patch = parseInt(REGEX_PATCH_VERSION.exec(currentVersion)[1], 10)

console.log(`Major Version: "${major}"`)
console.log(`Minor Version: "${minor}"`)
console.log(`Patch Version: "${patch}"`)

let newVersion = ''
const selectedBump = 'patch' // 'major' | 'minor' | 'patch'

switch (selectedBump) {
	case 'major':
		newVersion = `${major + 1}.0.0`
		break
	case 'minor':
		newVersion = `${major}.${minor + 1}.0`
		break
	case 'patch':
		newVersion = `${major}.${minor}.${patch + 1}`
		break
	default:
		console.log(
			`Invalid bump selected (script was provided "${selectedBump}")...`,
			`Maintaining version "${currentVersion}"...`
		)
		newVersion = currentVersion
		break
}

console.log(`Bumping "${selectedBump}" from "${currentVersion}" to version "${newVersion}"...`)

return 0
