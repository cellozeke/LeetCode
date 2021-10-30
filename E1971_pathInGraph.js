/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
// .load E1971_pathInGraph.js
var validPath = function(n, edges, start, end) {
  if (!edges.length) return start === end;
  let hash = {};
  edges.forEach(edge => {
    let [a, b] = [edge[0], edge[1]];
    hash[a] ? hash[a].push(b) : hash[a] = [b];
    hash[b] ? hash[b].push(a) : hash[b] = [a];
  })
  console.log(hash);
  if (hash[start].includes(end)) return true;
  if (!hash[start] || !hash[end]) return false;
  let check = hash[start];
  let visited = new Set(hash[start].concat([start])); // [4, 0]
  for (let num of check) { // [4]
    for (let conn of hash[num]) { // [0]
      if (conn === end) {
          return true;
      } else if (!visited.has(conn)) {
          check.push(conn);
      }
      visited.add(num);
    }
  }
  return false;
};

// console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5))
// console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2))
// console.log(validPath(10, [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], 7, 5))
console.log(validPath(5, [[0, 4]], 0, 4))
