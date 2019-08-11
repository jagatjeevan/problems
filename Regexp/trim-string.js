/**
 * Regular Expressions
 * Format the string with below conditions
 * 1. Remove white space before and after string.
 * 2. Convert 2 or more space with one
 * 3. Exclude new line with start spacing
 * 
 * */

function formatString(str) {
    return str
    .replace(/\s+/g, ' ') // Trim more spaces and multiline to single space
    .replace(/(^\s*)|(\s$)/gi, ''); // Trim start and end space
}