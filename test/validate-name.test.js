const validateName = require("../src/validate-name");

describe("Validate name", () => {
  describe("handles negetive scenarios", () => {
    test("empty string", () => {
      expect(validateName("")).toBe("No valid name");
    });

    test("name greater than 75 characters", () => {
      expect(
        validateName(
          "1234567890123456789012345678901234567890123456789012345678901234567890123459"
        )
      ).toBe("Name should not be more than 75 characters");
    });
  });

  describe("handles positive scenarios", () => {
    test("happy scenario : 3 words less than 25 chars each", () => {
      var name1 = "Jagat Jeevan Sahoo";
      expect(validateName(name1)).toEqual({
        first: "Jagat",
        middle: "Jeevan",
        last: "Sahoo",
      });
    });

    test("happy scenario : 4 words less than 25 chars each", () => {
      var name2 = "Kanha Jagat Jeevan Sahoo";
      expect(validateName(name2)).toEqual({
        first: "Kanha",
        middle: "Jagat",
        last: "Jeevan Sahoo",
      });
    });

    test("happy scenario : 5 words less than 25 chars each", () => {
      var name2 = "Kanha Jagat Raghupati Jeevan Sahoo";
      expect(validateName(name2)).toEqual({
        first: "Kanha",
        middle: "Jagat Raghupati",
        last: "Jeevan Sahoo",
      });
    });
  });
});
