/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  
};

/*
           1
          1 1
         1 2 1
        1 3 3 1
       1 4 6 4 1
     1 5 10 10 5 1
   1 6 15 20 15 6 1
  1 7 21 35 35 21 7 1
1 8 28 56 70 56 28 8 1

  28 = (7 + 6 + ... + 1)
  56 = (6 + 5 + ... + 1) + (5 + 4 + ... + 1) + ... + 1
  70 = [(5 + 4 + ... + 1) + (4 + 3 + ... + 1) + ... + 1] + [(4 + 3 + ... + 1) + (3 + 2 + 1) + ... + 1] + [(3 + 2 + 1) + (2 + 1) + 1] + [(2 + 1) + 1] + 1
*/
