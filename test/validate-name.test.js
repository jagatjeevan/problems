const validateName = require("../src/validate-name");

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

describe("For single word", () => {
  test("less than 25", () => {
    expect(validateName("Jagat")).toEqual({
      first: "",
      middle: "",
      last: "Jagat",
    });
  });
  test("for more than 25", () => {
    expect(validateName("Jkajsdflkjasdljfalksjdflkjasdlfjalksjdfkj")).toEqual(
      "No valid name"
    );
  });
});

describe("two words", () => {
  test("less than 25", () => {
    expect(validateName("Jagat Jeevan")).toEqual({
      first: "Jagat",
      middle: "",
      last: "Jeevan",
    });
  });

  test("for more than 25", () => {
    expect(
      validateName("Jkajsdflkjasdljfalksjdflkjasdlfjalksjdfkj sdfsdf")
    ).toEqual("No valid name");
    expect(
      validateName("sdfsdf Jkajsdflkjasdljfalksjdflkjasdlfjalksjdfkj")
    ).toEqual("No valid name");
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
      first: "Kanha Jagat",
      middle: "Jeevan",
      last: "Sahoo",
    });
  });

  test("happy scenario : 5 words less than 25 chars each", () => {
    var name2 = "Kanha Jagat Raghupati Jeevan Sahoo";
    expect(validateName(name2)).toEqual({
      first: "Kanha Jagat Raghupati",
      middle: "Jeevan",
      last: "Sahoo",
    });
  });

  test("happy scenario : more words less than 25 chars each", () => {
    var name2 = "MANDAVA VEERA VENKATESHWARA CHALLAPATHIRAO AAIYER IYER";
    expect(validateName(name2)).toEqual({
      first: "MANDAVA VEERA",
      middle: "VENKATESHWARA AAIYER",
      last: "CHALLAPATHIRAO IYER",
    });
  });

  test("More words with one more than 25 chars", () => {
    var name2 =
      "MANDAVA VEERA VENKATESHWARA VENKATESHWARACHALLAPATHI AAIYER IYER";
    expect(validateName(name2)).toEqual("No valid name");
  });
});
