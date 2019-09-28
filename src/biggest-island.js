/**
 * Find the biggest island from a given 2D array.
 * In the array, 1 represents land and 0 represents water.
 * Size of the island is all the cluster of land together.
 *
 * Example 1:
 * Input: [[0,0,1,0,0,0,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,0,0,0], [0,1,1,0,1,0,0,0,0,0,0,0,0], [0,1,0,0,1,1,0,0,1,0,1,0,0], [0,1,0,0,1,1,0,0,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,1,1,1,0,0,0], [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * Output: 6
 * Explanation: Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
 *
 * Example 2:
 * Input: [[0,0,0,0,0,0,0,0]]
 * Output: 0;
 * Explanation: Given the above grid, return 0.
 *
 * */

// var islandsPresent = {
//   "lat-long": ["lat-long"]
// };

var mapArray = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

const isCoordsAlreadyCounted = (islandsPresent, x, y) =>
  Object.keys(islandsPresent).filter(item =>
    islandsPresent[item].includes(`${x}-${y}`)
  );

const addNeibours = (map, islandsPresent, coordsString, x, y) => {
  // Handle only right and bottom, left and top is already taken care of by loop
  if(Boolean(map[1+y]) && map[x][1+y]) {
    islandsPresent[coordsString].push(`${x}-${1+y}`);
  }

  if(Boolean(map[1+x]) && map[1+x][y]) {
    islandsPresent[coordsString].push(`${1+x}-${y}`);
  }
};


var findSize = function(map) {
  const islandsPresent = {};
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      // If land
      if (map[i][j]) {
        const x = i;
        const y = j;
        const coordsString = `${i}-${j}`;
        if(!isCoordsAlreadyCounted(islandsPresent, i, j).length) {
          islandsPresent[coordsString] = [coordsString];
          addNeibours(map, islandsPresent, coordsString, i, j);
        } else {
          const parentCoords = isCoordsAlreadyCounted(islandsPresent, i, j)[0];
          addNeibours(map, islandsPresent, parentCoords, i, j);
        }
      }
    }
  }
  const islandSizes = Object.keys(islandsPresent).map(item => islandsPresent[item].length);
  return Math.max(...islandSizes);
};

findSize(mapArray);
