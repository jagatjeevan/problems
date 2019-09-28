/**
 * Problem url : https://dev.to/thepracticaldev/daily-challenge-4-checkbook-balancing-hei
 * */

var checkbook = `
1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;
`;

var cleanCheckbook = (input = checkbook) => {
  console.time("checkbook");
  // Remove all punctuation
  var sanitizeInput = input.trim().replace(/[^0-9a-z\. \n]/gi, "");
  var data = sanitizeInput.split("\n");
  var balance = 0;
  var spentRecord = 0;
  var spentAmt = 0;
  data.forEach(item => {
    var datum = item.split(" ");
    if (datum.length === 1) {
      console.log("Balance added is ", Number.parseFloat(item));
      balance += Number.parseFloat(item);
    } else {
      spentRecord += 1;
      spentAmt += Number.parseFloat(item);
      balance -= Number.parseFloat(item);
      console.log(datum[1], "costs ", datum[2], " Balance ", balance);
    }
  });
  console.log("Balance is ", balance);
  console.log("Total expenditure is ", spentAmt);
  console.log("Spent time is ", spentRecord);
  console.log("Average spent is ", spentAmt / spentRecord);
  console.timeEnd("checkbook");
};
