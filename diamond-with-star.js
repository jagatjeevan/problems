/**
 * Get a number and create a diamond.
 * Input is 2. Output is below
 *  *
 * * *
 *  *
 *
 *
 * Input is 3. Out put is below
 *   *
 *  * *
 * * * *
 *  * *
 *   *
 */

var star = "*";
var getStarsOfLength = n => {
  let str = "";
  for (let i = 1; i <= 2 * n; i++) {
    str += i % 2 === 0 ? " " : star;
  }
  return str;
};

var appendSpace = spaces => {
  let str = "";
  for (let i = 0; i < spaces; i++) {
    str += " ";
  }
  return str;
};

var createDiamond = n => {
  if (n < 2) {
    console.log("Cannot create a diamond shape with just one start");
  }

  let a = n;
  let starArray = [];

  while (a > 0) {
    if (a === n) {
      starArray.push(getStarsOfLength(n));
    } else {
      let space = appendSpace(n - a);
      let star = getStarsOfLength(a);
      starArray.push(space + star);
      starArray.unshift(space + star);
    }
    a -= 1;
  }

  starArray.forEach(star => console.log(star));
};
