/**
 * Sock Merchant : Taken from hackerrank
 * You would be given an array of colors of socks. You need to find the maximum pair.
 * Input given : [1, 2, 5, 10, 50, 5, 2, 7, 2] : Number represents the color. Here we
 * can only have 2 pairs : 2 & 5
 * */

var sockPairArr = [1, 2, 5, 10, 50, 5, 2, 7, 2];

function getSockPairs(arr = sockPairArr) {
    let totalSockColors = {};
    arr.forEach(item => {
        totalSockColors[item] = typeof(totalSockColors[item]) === 'undefined' ? 1 : ++totalSockColors[item];
    });
    let totalSockPair = 0;
    Object.keys(totalSockColors).forEach(item => {
        if(totalSockColors[item] > 1) {
            totalSockPair += parseInt(totalSockColors[item] / 2, 10);
        }
    });
    return totalSockPair;
}