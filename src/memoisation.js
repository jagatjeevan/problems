/**
 *
 * Memoization.
 * Get the result from the cache
 *
 * */

const sqareOf = n => Math.pow(n, 2);
const cache = {};
const memoise = n => {
  if (!cache.squareOf) {
    cache.squareOf = {};
  }
  if (cache.squareOf[n]) {
    console.log("getting from cache");
    return cache.squareOf[n];
  } else {
    cache.squareOf[n] = sqareOf(n);
  }
  console.log(cache);
};

memoise(3);
memoise(3);
memoise(3);
memoise(3);
