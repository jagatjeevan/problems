const problemOptions = require("../src/LinkedList/double_linked-list");

describe("problemOptions", () => {
  it("creates a mind map for problems and options", () => {
    const input = [
      { steps: "A", option: "B" },
      { steps: "B", option: "C" },
    ];
    const output = {
      A: {
        prev: null,
        next: ["B"],
      },
      B: {
        prev: ["A"],
        next: ["C"],
      },
    };
    expect(problemOptions(input)).toEqual(output);
  });

  it("creates a mind map for problems and options with 2 options", () => {
    const input = [
      { steps: "A", option: "B" },
      { steps: "B", option: "D" },
      { steps: "A", option: "C" },
    ];
    const output = {
      A: {
        prev: null,
        next: ["B", "C"],
      },
      B: {
        prev: ["A"],
        next: ["D"],
      },
    };
    expect(problemOptions(input)).toEqual(output);
  });

  it("creates a mind map for problems and options with interlinked options", () => {
    const input = [
      { steps: "A", option: "B" },
      { steps: "B", option: "D" },
      { steps: "A", option: "C" },
      { steps: "C", option: "D" },
    ];
    const output = {
      A: {
        prev: null,
        next: ["B", "C"],
      },
      B: {
        prev: ["A"],
        next: ["D"],
      },
      C: {
        prev: ["A"],
        next: ["D"],
      },
    };
    expect(problemOptions(input)).toEqual(output);
  });
});
