/**
 *
 * Taken from hackerrank.
 * Alice and bob compares the code given in terms of complex, difficulty and originality.
 * Input given would be array [complex, difficulty, originality] by each member.
 * If alice[complexity] > bob[complexity] => alice gets 1 point
 * If bob[complexity] > alice[complexity] => bob gets 1 point
 * If bob[complexity] = alice[complexity] => nobody gets point
 *
 * */

var input = {
  alice: [5, 6, 7],
  bob: [3, 6, 10],
  mary: [5, 6, 10]
};

var score = function(input) {
  var scorecard = {};
  var firstKey = "";

  Object.keys(input).forEach((element, index) => {
    if (index === 0) {
      firstKey = element;
    }
    scorecard[element] = 0;
  });

  var criteriaLength = input[firstKey].length;

  for (let i = 0; i < criteriaLength; i++) {
    var people = Object.keys(scorecard);
    let scenarioArr = [];
    people.forEach(person => {
      scenarioArr.push(input[person][i]);
    });
    const maxValue = scenarioArr.sort()[scenarioArr.length - 1];
    const minValue = scenarioArr.sort()[0];
    if (minValue !== maxValue) {
      people.forEach(person => {
        if (input[person][i] === maxValue) {
          scorecard[person] = scorecard[person] + 1;
        }
      });
    }
  }

  return scorecard;
};
