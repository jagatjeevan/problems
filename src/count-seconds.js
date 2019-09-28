/**
 *
 * Given the number of seconds, convert to how many number of
 * seconds, minutes, hours, days, months, year would be.
 *
 * Input : x seconds , Output : a years, b months, c days, d hours .....
 * Make sure you handle the plurals, comma and ends with a fullstop.
 *
 * Take month be always 30 days.
 *
 * */

var formatDisplayString = string => {
  let strArr = string.trim().split(" ");
  let tmp = [...strArr];
  const tmp1 = [...tmp.splice(0, tmp.length - 1)];
  if(tmp1.length) {
    return [...tmp1, "and", strArr[strArr.length-1]];
  }
  return [strArr[strArr.length-1]];
};

var formatSeconds = inputInSeconds => {
  if(inputInSeconds === 1) {
    return '1sec.';
  }
  if(inputInSeconds < 60) {
    return `${inputInSeconds}secs.`;
  }
  let tmp = inputInSeconds;
  const mapper = {
    31104000: "year",
    2592000: "month",
    86400: "day",
    3600: "hour",
    60: "min",
    1: "sec"
  };

  const value = {
    31104000: 0, // year
    2592000: 0, // months
    86400: 0, // days
    3600: 0, // hours
    60: 0, // mins
    1: 0 // second
  };

  const sortValue = (a, b) => {
    if (parseInt(a, 10) < parseInt(b, 10)) return 1;
    if (parseInt(a, 10) > parseInt(b, 10)) return -1;
    return 0;
  };

  const getParams = Object.keys(value).map(item => parseInt(item, 10));

  getParams.sort(sortValue).forEach(timeUnit => {
    let numberValue = parseInt(timeUnit, 10);
    if (numberValue <= tmp) {
      value[timeUnit] = parseInt(tmp / numberValue, 10);
      tmp -= timeUnit * value[timeUnit];
    }
  });

  // Display part
  let displayString = "";
  getParams.forEach(item => {
    if (value[item] === 0) {
      return;
    } else if (value[item] === 1) {
      displayString += ` ${value[item]}${mapper[item]}`;
    } else {
      displayString += ` ${value[item]}${mapper[item]}s`;
    }
  });
  displayString += ".";
  return formatDisplayString(displayString).join(" ");
};

module.exports = formatSeconds;