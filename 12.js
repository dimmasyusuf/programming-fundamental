/* EXERCISE */

/*
1. Create a function to convert Excel sheet column title to its corresponding column number.
Example :
  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28

Example :
  Input : AB
  Output : 28
*/

console.log('\nNumber 1');
console.log(
  'Convert Excel sheet column title to its corresponding column number'
);

function convertExcelColumnToNumber(column) {
  let result = 0;
  for (let i = 0; i < column.length; i++) {
    result += (column.charCodeAt(i) - 64) * Math.pow(26, column.length - i - 1);
  }
  return result;
}

console.log(`AZ -> ${convertExcelColumnToNumber('AZ')}`);

/*
2. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Example 1:
  Input: nums = [2,2,1]
  Output: 1
Example 2:
  Input: nums = [4,1,2,1,2]
  Output: 4
Example 3:
  Input: nums = [1]
  Output: 1
*/

console.log('\nNumber 2');
console.log(
  'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.'
);

function findSingleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}

console.log(`[4,1,2,1,2] -> ${findSingleNumber([4, 1, 2, 1, 2])}`);

/*
3. Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true
Example 2:
  Input: s = "rat", t = "car"
  Output: false
*/

console.log('\nNumber 3');
console.log(
  'Given two strings s and t, return true if t is an anagram of s, and false otherwise.'
);

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const sSorted = s.split('').sort().join('');
  const tSorted = t.split('').sort().join('');
  return sSorted === tSorted;
}

console.log(
  `s = "anagram", t = "nagaram" -> ${isAnagram('anagram', 'nagaram')}`
);
console.log(`s = "rat", t = "car" -> ${isAnagram('rat', 'car')}`);

/*
4. You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1:
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps
Example 2:
  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step
*/

console.log('\nNumber 4');
console.log(
  'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.'
);

// create a function when i console.log it, it will show the resuls step by step like this examples:
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(n) {
  const results = [];
  function climb(i, n, steps) {
    if (i > n) return;
    if (i === n) {
      results.push(steps);
      return;
    }
    climb(i + 1, n, `${steps} 1 step`);
    climb(i + 2, n, `${steps} 2 steps`);
  }
  climb(0, n, '');
  return results;
}

console.log(`n = 3 -> ${climbStairs(3)}`);
