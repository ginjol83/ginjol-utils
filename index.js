/** 
 * Function that trims all the elements of an object passed as a parameter.
 */

const trimAllStrings = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        if (typeof value === 'string') {
            acc[key] = value.trim();
        } else if (Array.isArray(value)) {
            acc[key] = value.map(item => {
                if (typeof item === 'string') {
                    return item.trim();
                } else if (Array.isArray(item) || (item !== null && typeof item === 'object')) {
                    return trimAllStrings(item); 
                } else {
                    return item;
                }
            });
        } else if (value !== null && typeof value === 'object') {
            acc[key] = trimAllStrings(value); 
        } else {
            acc[key] = value;
        }
        return acc;
    }, {});
}

/**
 * This function converts a boolean value to a symbol:
 *  It returns '✔' if the value is true, and 'X' if the value is false.
 */
const booleanToSymbol = (value) => value ? '✔' : 'X'


export { trimAllStrings, booleanToSymbol }