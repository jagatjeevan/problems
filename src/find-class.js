/**
 * Input is a JSON structure of DOM Elements. We need to implement to get all the ids with className 'baz'
 * */

var input = {
  tree: {
    tagName: "div",
    attributes: {
      id: "0",
      class: "foo bar baz"
    },
    childNodes: [
      {
        tagName: "span",
        attributes: {
          id: "1",
          class: "baz bar"
        },
        childNodes: []
      },
      {
        tagName: "p",
        attributes: {
          id: "2",
          class: "baz"
        },
        childNodes: [
          {
            tagName: "span",
            attributes: {
              id: "3",
              class: "baz"
            },
            childNodes: []
          }
        ]
      }
    ]
  }
};

// Output: [0, 1];

let hasRootClassName = (root, className) => {
  var attributes = root.attributes;
  return attributes.class.split(" ").includes(className) ? attributes.id : null;
};

let traverseChild = (nodes, className) => {
  let idToPass = [];
  nodes.forEach(node => {
    idToPass.push(hasRootClassName(node, className));
    if (node.childNodes.length) {
      idToPass.push(...traverseChild(node.childNodes, className));
    }
  });
  return idToPass;
};

let findClassName = function(className) {
  let ids = [];
  if (!Object.keys(input).length) {
    console.log("Dom is empty");
  }
  var root = input.tree;
  ids.push(hasRootClassName(root, className));
  ids.push(...traverseChild(root.childNodes, className));
  return ids.filter(id => id).sort();
};
