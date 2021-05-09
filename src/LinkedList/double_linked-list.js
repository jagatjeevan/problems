// Given a problem, there could be multiple options.
// Create a mind map of the problem statement and options
// Problem A would have 2 solutions B & C.
// To achieve B, there could be multiple options, let us take 3 options (D,E,F)
// Similarly, To achieve C, there could be multiple options, let us take 3 options (G,H,I)
// So A leads to B leads to D, E, F and
// A leads to C leads to G, H, I
// Input : [{steps: A, option: B}, {steps: A, option: C}, {steps: B, option: D}, {steps: C, option: E}]
// Output : A -> B -> D & A -> C -> E

function hasAnyPrevStep(arr, stepName) {
  const steps = arr.filter((elem) => elem.option === stepName);
  return {
    hasPrevSteps: steps.length > 0,
    prevNodes: steps,
  };
}

function hasAnyNextStep(arr, stepName) {
  const steps = arr.filter((elem) => elem.steps === stepName);
  return {
    hasNextSteps: steps.length > 0,
    nextNodes: steps,
  };
}

function problemOptions(problemsArr) {
  const doublyLinkedList = {};
  problemsArr.forEach((element) => {
    const { hasPrevSteps, prevNodes } = hasAnyPrevStep(
      problemsArr,
      element.steps
    );
    const { hasNextSteps, nextNodes } = hasAnyNextStep(
      problemsArr,
      element.steps
    );
    doublyLinkedList[element.steps] = {
      prev: hasPrevSteps ? prevNodes.map((item) => item.steps) : null,
      next: hasNextSteps ? nextNodes.map((item) => item.option) : null,
    };
  });
  return doublyLinkedList;
}

module.exports = problemOptions;
