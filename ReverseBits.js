/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    var s = '';
    var count = 0;
    var index = 31;
    while (n > 0) {
        if (n % 2 !== 0) count += Math.pow(2, index);
        index--;
        n = Math.floor(n / 2);
      }
      return count;
  };

  /*

  - First convert the number to a string.
  - Then iterate over the string and add the value of the current character to the count variable.
  - Then decrement the index variable and divide the number by 2.
  

  */