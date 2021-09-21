/**
 *
 * Given a name string of certain number of alphabets, break the name to first, middle and last name.
 * Criterias :
 * 1. Max length of the name string should be max of 75
 * 2. Each of the name should be less than or equal to 25
 * Assumption : You would have atleast 3 words of 1 char each
 *
 * */

const maxCharAllowedInName = 75;
const maxCharAllowedInNameSegment = 25;

function getName(nameArr) {
  const arr = [];
  for (let i = 3; i > 0; i--) {
    // 3 is for the length of "first, middle and last"
    const nameSegment = Math.floor(nameArr.length / i);
    arr.push(nameArr.splice(0, nameSegment));
  }
  return arr.map((item) => item.join(" "));
}

function checkNameSegment(nameSegment) {
  const noOfWords = nameSegment.split(" ");
  if (nameSegment.length <= maxCharAllowedInNameSegment) {
    return ["", nameSegment, true];
  }

  if (noOfWords < 2) {
    return ["", nameSegment, false];
  }

  let name = "";
  let isValid = null;
  let extra = "";
  let wordsInSegment = nameSegment.split(" ");
  for (let i = wordsInSegment.length; i > 1; i--) {
    const tmp = wordsInSegment[i];
    if ((name + tmp).length > maxCharAllowedInNameSegment) {
      extra += tmp;
    } else {
      name += tmp;
    }
  }

  isValid = name < maxCharAllowedInNameSegment;

  return [extra, name, isValid];
}

function getNameValidated(first, middle, last) {
  const [lextra, lnameSegment, lisValid] = checkNameSegment(last);
  if (!lisValid) return [first, middle, last, false];

  const [mextra, mnameSegment, misValid] = checkNameSegment(
    `${middle} ${lextra}`
  );
  if (!misValid) return [first, middle, last, false];

  const [fextra, fnameSegment, fisValid] = checkNameSegment(
    `${first} ${mextra}`
  );
  if (!fisValid || fextra !== "") return [first, middle, last, false];

  return [fnameSegment, mnameSegment, lnameSegment, true];
}

function validateName(str) {
  if (!str.length) return "No valid name";
  if (str.length > maxCharAllowedInName)
    return `Name should not be more than ${maxCharAllowedInName} characters`;

  const words = str.split(" ");
  const [tmpfirst, tmpmiddle, tmplast] = getName(words);
  const [first, middle, last, isValid] = getNameValidated(
    tmpfirst,
    tmpmiddle,
    tmplast
  );

  if (!isValid) return "No valid name.";

  return {
    first: first.trim(),
    middle: middle.trim(),
    last: last.trim(),
  };
}

module.exports = validateName;
