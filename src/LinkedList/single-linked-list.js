// Traverse a single linked list
// a node looks like node = { value: 7, next: node}

function SingleLinkedList() {
  const linkedList = {};
  linkedList.push = (nodeValue) => {
    if (!linkedList.value) {
      linkedList = { value: nodeValue, next: null };
    } else {
        const tmpList = {};
        while(linkedList.next === null){
            
        }
    }
  };
  return linkedList;
}
