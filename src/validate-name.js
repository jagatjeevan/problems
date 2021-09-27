/**
 *
 * Given a name string of certain number of alphabets, break the name to first, middle and last name.
 * Criterias :
 * 1. Max length of the name string should be max of 75
 * 2. Each of the name should be less than or equal to 25
 * Assumption : You would have atleast 3 words of 1 char each.
 * Distribution of words is as per your choice
 *
 * */

const maxCharInName = 75;
const maxCharInNameSeg = 25;

function getNameSegment(str, index) {
  const wordCount = str.split(" ");
  let extra = "";
  let nameSeg = "";
  let shouldPutInExtra = false;
  for (let i = 0; i <= wordCount.length - index; i++) {
    if (
      !shouldPutInExtra &&
      parseInt((nameSeg + wordCount[i]).length, 10) < maxCharInNameSeg - 1
    ) {
      nameSeg = nameSeg === "" ? wordCount[i] : `${nameSeg} ${wordCount[i]}`;
    } else {
      shouldPutInExtra = true;
      extra = extra === "" ? wordCount[i] : `${extra} ${wordCount[i]}`;
    }
  }

  const startIndex = wordCount.length - index + 1;
  for (let i = startIndex; i < wordCount.length; i++) {
    extra = extra === "" ? wordCount[i] : `${extra} ${wordCount[i]}`;
  }

  const isValid = nameSeg.length < maxCharInNameSeg;
  return [nameSeg, extra, isValid];
}

function validateName(str) {
  if (!str.length) return "No valid name";
  if (str.length > maxCharInName)
    return `Name should not be more than ${maxCharInName} characters`;

  const noOfWords = str.split(" ");
  let first = "";
  let middle = "";
  let last = "";
  let isValid;
  switch (noOfWords.length) {
    case 1:
      last = str;
      isValid = str.length < maxCharInNameSeg;
      break;

    case 2:
      first = noOfWords[0];
      last = noOfWords[1];
      isValid =
        noOfWords[0].length < maxCharInNameSeg &&
        noOfWords[1].length < maxCharInNameSeg;
      break;

    default:
      let extra, fIsValid, mIsValid, lIsValid;
      [first, extra, fIsValid] = getNameSegment(str, 3);
      [middle, extra, mIsValid] = getNameSegment(extra, 2);
      [last, extra, lIsValid] = getNameSegment(extra, 1);
      isValid = fIsValid && mIsValid && lIsValid && extra === "";
  }

  if (!isValid) return "No valid name";

  return { first, middle, last };
}

module.exports = validateName;
