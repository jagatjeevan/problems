const reverseVowels = require("../src/strings/reverse-vowels");

describe("reverseVowels", () => {
  test("should return 'A' when input is 'A'", () => {
    expect(reverseVowels("A")).toBe("A");
  });

  test("should return 'AceCreIm' when input is 'IceCreAm'", () => {
    expect(reverseVowels("IceCreAm")).toBe("AceCreIm");
  });

  test("should return 'leotcede' when input is 'leetcode'", () => {
    expect(reverseVowels("leetcode")).toBe("leotcede");
  });

  test("should return 'Enter a valid string' when input is empty", () => {
    expect(reverseVowels("")).toBe("Enter a valid string");
  });

  test("should return 'Enter a valid string' when input is whitespace", () => {
    expect(reverseVowels("   ")).toBe("Enter a valid string");
  });
});
