const Queue = require("../src/LinkedList/queue");

describe("Queue", () => {
  const initialArr = [1, 2, 3];
  const q1 = new Queue(initialArr);
  it("shows the elements of the queue", () => {
    expect(q1.getQueue()).toEqual(initialArr);
  });

  it("adds elements of the queue", () => {
    q1.push(7);
    expect(q1.getQueue()).toEqual([1, 2, 3, 7]);
  });

  it("removes the first elements of the queue", () => {
    q1.pop();
    expect(q1.getQueue()).toEqual([2, 3, 7]);
  });
});
