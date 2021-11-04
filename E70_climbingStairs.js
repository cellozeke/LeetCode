/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 1 1
  // 2

  // 1 1 1
  // 1 2
  // 2 1
  
  // 1 1 1 1
  // 1 1 2
  // 1 2 1
  // 2 1 1
  // 2 2

  // 1 1 1 1 1
  // 1 1 1 2
  // 1 1 2 1
  // 1 2 1 1
  // 1 2 2  like n = 4 with 1 as head
  // 2 1 1 1
  // 2 1 2
  // 2 2 1  like n = 3 with 2 as head

  // if (n < 4) return n;
  // return climbStairs(n - 1) + climbStairs(n - 2);
  
  // 1 2 3 4 5 6  7  8
  // 1 2 3 5 8 13 21 34
  //     0 1 3 7  14 26
  //      1 2 4  7  12
  //       16 25 36 49 64
  if (n < 4) return n;
  let a = 0;
  let b = 1;
  let sum;
  while (n) {
    sum = a + b;
    a = b;
    b = sum;
    n--;
  }
  return sum;
};
