const mergeAlternately = require("../src/strings/merge-string-alternatively");

describe("Merges the string alternatively", () => {
  test("merges two strings of equal length", () => {
    expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
  });

  test("merges two strings of different lengths", () => {
    expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
    expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
  });

  test("merges two empty strings", () => {
    expect(mergeAlternately("", "")).toBe("");
  });

  test("merges an empty string with a non-empty string", () => {
    expect(mergeAlternately("", "abc")).toBe("abc");
    expect(mergeAlternately("abc", "")).toBe("abc");
  });
});
