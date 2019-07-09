/**
* Taken from hackerrank. 
* A hiker goes for a hike. Every step is 1 altitude up / down depending on whether he goes 
* uphill(U) or downhill(D). You need to count the number of valleys he travelled. 
* 
* Starts_/\  _     So valley is 1
*          \/
* 
* 
* Starts _       __ So valley is 1
*          \    /
*           \/\/
* 
* Input: A string with U & D. 
*/


function countingValleys(s) {
  let altitude = 0;
  let valley = 0;
  let valleyStart = false;
  s.split('').forEach(item => {
    if (item === 'U') {
      altitude += 1;
    } else {
      altitude -= 1;
    }
    if (altitude < 0) { 
      valleyStart = true;
    }
    if (valleyStart && altitude === 0) {
      valley += 1;
      valleyStart = false;
    }
  });
  return valley;
}
