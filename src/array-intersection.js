/**
 * Find the intersection of 2 sorted arrays
 * Input : A = [1, 5, 7, 8], B = [3, 4, 5]
 * Output : [5]
 * 
 * */

var findIntersection = (a, b) => {
    const tmp = [];
    let aPointer = 0;
    let bPointer = 0;
    while(aPointer < a.length && bPointer < b.length) {
        if(a[aPointer] === b[bPointer]) {
            tmp.push(a[aPointer]);
            aPointer++;
            bPointer++;
        }
        if(a[aPointer] > b[bPointer]) {
            bPointer++;
        } 
        if(a[aPointer] < b[bPointer]) {
            aPointer++
        }
    }
    return tmp;
}

module.exports = findIntersection;