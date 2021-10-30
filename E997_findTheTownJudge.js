/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
  if (!trust.length && n === 1) return n;
  let notJudge = new Set();
  let hash = {};
  trust.forEach(rel => {
      notJudge.add(rel[0]); // notJudge = [1, 2, 4]
  })
  trust.forEach(rel => {
      if (!notJudge.has(rel[1])) {
          hash[rel[1]] ? hash[rel[1]].push(rel[0]) : hash[rel[1]] = [rel[0]];
      } // hash = {3: [1, 2, 4]}
  })
//     for (let i in hash); for(let i of hash)
  let hashKeys = Object.keys(hash); // hashKeys = [3]
  for (let i = 0; i < hashKeys.length; i++) {
      if (hash[hashKeys[i]].length === n - 1) return hashKeys[i];
  }
  return -1;
};



// go through trust array
// make set of all ai (list of people who cannot be judge) i.e. [1, 2, 4]

// go through trust array
// make hash with bi's NOT in ai array as keys, i.e. {3: [1, 2, 4]}
// if any hash value with all n besides key = judge
// 