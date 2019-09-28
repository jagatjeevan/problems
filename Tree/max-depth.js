/**
 * Find the maximum depth of a binary tree.
 *
 * Each node is defined by
 * Node = {
 *  left: Node || null,
 *  right: Node || null,
 *  data: number
 * }
 *
 * Input:
 * {
 *  left: null,
 *  right: {
 *      left: null,
 *      right: null,
 *      data: 2
 *  },
 *  data: 20
 * }
 *
 * The depth is 1.
 *
 * */

var input = {
    left: null, 
    data: 1, 
    right: {
        left: null, 
        data: 2, 
        right: { 
            left: null, 
            data: 21, 
            right: {
                left: null, 
                data: 4, 
                right: {
                    left: null, 
                    data: 5, 
                    right: null
                },
            },
        },
    },
};


var getDepthOfObj = (obj, level) => {
    if(obj == null){
        return 0;
    }
    if(!obj.left && !obj.right) {
        return level;
    } else if (!obj.left) {
        return getDepthOfObj(obj.right, level + 1);
    } else if (!obj.right) {
        return getDepthOfObj(obj.left, level + 1);
    } else {
        return Math.max(getDepthOfObj(obj.right, level + 1), getDepthOfObj(obj.left, level + 1))
    }
    
}

console.log(getDepthOfObj(input, 0));