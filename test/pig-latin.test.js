const getPigLatinEncoding = require("../src/pig-latin");

describe("Pig latin encoded value", () => {
  it("It encodes the value", () => {
    expect(getPigLatinEncoding("Jay Hind")).toBe("ayJay indHay");
    expect(getPigLatinEncoding("allu arjun")).toBe("lluaay rjunaay");
    expect(getPigLatinEncoding("    ")).toBe("Enter a valid string");
    expect(getPigLatinEncoding("  a  ")).toBe("aay");
  });
});
