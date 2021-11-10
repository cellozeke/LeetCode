/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]];
  let triangle = [[1], [1, 1]];
  while (numRows > 2) {
    let newRow = [];
    let lastRow = triangle[triangle.length - 1];
    for (let i = 1; i < lastRow.length; i++) {
      newRow.push(lastRow[i] + lastRow[i - 1]);
    }
    newRow.unshift(1);
    newRow.push(1);
    triangle.push(newRow);
    numRows--;
  }
  return triangle;
};
