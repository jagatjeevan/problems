/**
 *
 * Given an array of numbers, sort the array without using array.sort().
 *
 * */

var input = [7, 3, 8, 2, 6, 10];

var sortArray = input => {
  let sortedArr = [];
  input.forEach(elem => {
      if(!sortedArr.length || elem > sortedArr[sortedArr.length -1]) {
        sortedArr.push(elem);
      } else if(elem < sortedArr[0]) {
        sortedArr.unshift(elem);
    } else {
        let checkFurther = true;
        sortedArr.forEach((item, index) => {
            if(elem < item && checkFurther) {
                sortedArr = [...sortedArr.slice(0, index), elem, ...sortedArr.slice(index, sortedArr.length)];
                checkFurther = false;
            }
        });
    }
  });
  return sortedArr;
};
