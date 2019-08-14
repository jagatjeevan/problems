/**
 *
 * Taken from code wars.
 * Check the given number is a squareroot or not
 * 1. Negetive numbers are not allowed
 * 2. Should return true / false
 *
 * */

const isSqrt = (numb) => {
    return (n < 0) ? false : parseInt(Math.sqrt(n), 10) === Math.sqrt(n);
}