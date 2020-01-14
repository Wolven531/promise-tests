// import {
// 	existsSync,
// 	readFileSync
// } from 'fs'
// import { join } from 'path'
const fs = require('fs')
const path = require('path')

const fileName = 'package.json'
const filePath = path.join(__dirname, fileName)

if (!fs.existsSync(filePath)) {
	console.error(`"${fileName}" not found, bailing...`)
	return 1
}

console.log(`"${fileName}" found, reading contents...`)

// Open file for reading and writing
// fs.readFileSync(filePath, { encoding: 'UTF8', flag: 'r+' })
// Open file for reading
const packContents = fs.readFileSync(filePath, { encoding: 'UTF8', flag: 'r' })
const REGEX_VERSION = /\s+"version":\s+"(.+)",/g
const results = REGEX_VERSION.exec(packContents)

if (!results) {
	console.error(`"version" not found in "${fileName}", bailing...`)
	return 2
}

const currentVersion = results[1]

console.log(`Current Version: "${currentVersion}"`)



return 0
