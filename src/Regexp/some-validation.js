/**
 * Regular Expressions
 * Use regular expression to get the validations
 * 1. Test a string with alpha-numeric without multiline.
 * 
 * 2. First char of string is uppercase
 * 
 * 3. Check the validity of a credit card number (16 digits). They might separate with a 
 * space or any other delimeter
 * 
 * 4. Check for email address
 * 
 * */

function isAlphaNumeric(str) {
    const regExp = /.+/;
    return regExp.test(str);
}


function isSentenceCase(str) {
    const regExp = /[A-Z].+/;
    return regExp.test(str);
}

function isValidCreditCard(str) {
    const digitsRegex = /\d/g;
    return str.match(digitsRegex).length === 16;
}

function isValidEmail(str) {
    const regExp = /^[a-z](.+)(@)(.+)\.([a-z]{2,3})/i;
    return str.test(regExp);
}