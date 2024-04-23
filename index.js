/** 
 * Function that trims all the elements of an object passed as a parameter.
 */

const trimAllStrings = (obj) => {
	return Object.keys(obj).reduce((acc, key) => {
		const value = obj[key]
		if (typeof value === 'string') {
			acc[key] = value.trim()
		} else if (Array.isArray(value)) {
			acc[key] = value.map(item => trimAllStrings(item)) // Apply recursively if it is an array
		} else if (value !== null && typeof value === 'object') {
			acc[key] = trimAllStrings(value) // Apply recursively if it is an object
		} else {
			acc[key] = value
		}
		return acc
	}, {})
}


export { trimAllStrings }