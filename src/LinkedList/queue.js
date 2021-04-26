// Implement Queue in JavaScript

function Queue(initialArr) {
  const obj = {};
  obj.arr = initialArr;

  obj.push = (numb) => {
    obj.arr = [...obj.arr, numb];
  };

  obj.pop = () => {
    obj.arr.shift();
  };

  obj.getQueue = () => obj.arr;

  return obj;
}

// With classes way
// class Queue {
//   #arr = [];
//   constructor(initialArr) {
//     this.#arr = initialArr;
//   }
//   getQueue() {
//     return this.#arr;
//   }
//   push(arrMember) {
//     this.#arr.push(arrMember);
//   }
//   pop() {
//     this.#arr.shift();
//   }
// }

module.exports = Queue;
