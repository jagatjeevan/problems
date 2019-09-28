const formatSeconds = require("../src/count-seconds");

describe("Format seconds", () => {
  it("renders 1 sec", () => {
    expect(formatSeconds(1)).toEqual("1sec.");
  });

  it("renders 12 secs", () => {
    expect(formatSeconds(12)).toEqual("12secs.");
  });

  it("renders 120 secs as 2 mins", () => {
    expect(formatSeconds(120)).toBe("2mins.");
  });

  it("renders 3603 secs as 1hour and 3 secs.", () => {
    expect(formatSeconds(3603)).toBe("1hour and 3secs.");
  });
});
