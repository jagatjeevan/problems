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

var getDiamondPortion = (n, isAbovePart) => {
  for (let i = 1; i < n; i++) {
    let str = "";
    str += appendSpace(isAbovePart ? n - i : i);
    str += getStarsOfLength(isAbovePart ? i : n - i);
    console.log(str);
  }
};

var createDiamond = n => {
  if (n < 2) {
    console.log("Cannot create a diamond shape with just one start");
  }

  getDiamondPortion(n, true);
  let star = getStarsOfLength(n);
  console.log(star);
  getDiamondPortion(n, false);
};
