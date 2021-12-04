/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if (n < 1) return false;
  while (!(n % 2)) n /= 2;
  while (!(n % 3)) n /= 3;
  while (!(n % 5)) n /= 5;
  if (n === 1) return true;
  if (isPrime(n)) return false;
  for (let i = 7; i <= n / 7; i++) {
    if (!(n % i) && isPrime(i)) return false;
  }
  return true;
};

const isPrime = num => {
  for (let i = 2; i <= num / i; i++) {
    if (!(num % i)) return false
  }
  return true;
}
