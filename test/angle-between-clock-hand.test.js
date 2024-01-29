const getAngle = require("../src/angle-between-clock-hand");

test("Greater Angle formed between clock hands", () => {
  expect(getAngle(12, 12)).toEqual(0);
  expect(getAngle(1, 12)).toEqual(330);
  expect(getAngle(2, 12)).toEqual(300);
  expect(getAngle(2, 6)).toEqual(105);
  expect(getAngle(6, 10)).toEqual(95);
  expect(getAngle(3, 6)).toEqual(75);
});
