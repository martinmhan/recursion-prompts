/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n < 0) {
		return null;
	} else if (n === 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if (array.length === 0) {
		return 0;
	} else if (array.length === 1) {
		return array[0];
	} else {
		return array[array.length-1] + sum(array.slice(0, array.length-1));
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (typeof array === 'number') {
    return array;
  } else {
		return sum(array.map(x => arraySum(x)));
	}
};

// 4. Check if a number is even.
var isEven = function(n) {
	if (n === 0) {
		return true;
	} else {
		if (n < 0) {
			return (!isEven(n + 1));
		} else {
			return (!isEven(n - 1));
		}
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	var sum;
	var nAbs = Math.abs(n);
	if (nAbs === 1 || nAbs === 0) {
		sum = 0;
	} else {
		sum = (nAbs - 1) + sumBelow(nAbs - 1);
	}
	sum = n < 0 ? -sum : sum;
	return sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if (Math.abs(x - y) <= 1) {
		return [];
	} else if (Math.abs(x - y) === 2) {
		if (x < y) {
			return [x + 1];
		} else {
			return [y + 1];
		}
	} else {
		if (x < y) {
			return [x + 1, ...range(x + 1, y)];
		} else {
			return [x - 1, ...range(x - 1, y)];
		}
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	} else if (exp === 1) {
		return base;
	} else if (exp > 0) {
		return base * exponent(base, exp - 1);
	} else {
    return 1 / exponent(base, - exp);
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 0) {
		return false;
	} else if (n === 1 || n === 2) {
		return true;
	} else if (n%2 !== 0) {
		return false;
	} else {
		return powerOfTwo(n / 2);
	}
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if (string.length === 1) {
		return string;
	} else {
		return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
	}
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	var newString = string.toLowerCase().replace(/\s/, '');
	if (newString.length === 1 || newString.length === 0) {
		return true;
	} else {
		return (newString[0] === newString[newString.length - 1]) && palindrome(newString.slice(1, newString.length - 1));
	}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	var xAbs = x < 0 ? -x : x;
	var yAbs = y < 0 ? -y : y;
	var sign = x < 0 ? -1 : 1;
	if (yAbs === 0) {
		return NaN;
	} else if (xAbs - yAbs === 0) {
		return 0;
	} else if (xAbs - yAbs < 0) {
		return sign === 1 ? xAbs : -xAbs;
	} else {
		return sign === 1 ? modulo(xAbs - yAbs, yAbs) : -modulo(xAbs - yAbs, yAbs); 
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if (y === 0) {
		return 0;
	} else if (y === 1) {
		return x;
	} else if (y === -1) {
		return -x;
	} else {
		if (y > 0) {
			return x + multiply(x, y - 1);
		} else {
			return -x + multiply(x, y + 1);
		}
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	var xAbs = x > 0 ? x : -x;
	var yAbs = y > 0 ? y : -y;
	var sign;
	if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
		sign = 1;
	} else {
		sign = -1;
	}

	if (y === 0) {
		return NaN;
	} else if (x === y) {
		return 1;
	} else if (xAbs > yAbs) {
		if (sign = 1) {
			return 1 + divide(xAbs - yAbs, yAbs);
		} else {
			return 0 - 1 - divide(xAbs - yAbs, yAbs);
		}
	} else {
		return 0;
	}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	let max = Math.max(x, y);
	let min = Math.min(x, y);

	if (x < 0 || y < 0) {
		return null;
	} else if (x === y) {
		return x;
	} else if (max%min === 0) {
		return min;
	} else {
		return gcd(min, max % min);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1.length === 0 && str2.length === 0) {
		return true;
	} else {
		return (str1[0] === str2[0]) && compareStr(str1.slice(1), str2.slice(1));
	}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if (str.length === 1) {
		return [str[0]];
	} else {
		return [str[0], ...createArray(str.slice(1))];
	}
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	if (array.length <= 1) {
		return array;
	} else {
		return [array[array.length - 1], ...reverseArr(array.slice(0, array.length - 1))];
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if (length === 1) {
		return [value];
	} else {
		return [value, ...buildList(value, length - 1)];
	}
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	if (n === 1) {
		return ['1'];
	} else {
		let num;
		if (n%3 === 0 && n%5 === 0) {
			num = 'FizzBuzz';
		} else if (n%3 === 0) {
			num = 'Fizz';
		} else if (n%5 === 0) {
			num = 'Buzz';
		} else {
			num = n.toString();
		}
		return [...fizzBuzz(n - 1), num];
	}
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	let count = array[0] === value ? 1 : 0;
	if (array.length === 1) {
		return count;
	} else {
		return count + countOccurrence(array.slice(1), value);
	}
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	let first = callback(array[0]);
	if (array.length === 1) {
		return [first];
	} else {
		return [first, ...rMap(array.slice(1), callback)];
	}
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	let count = 0;
	if (typeof obj !== 'string') {
		for (let k in obj) {
			if (k === key) {
				count += 1;
			}
			count += countKeysInObj(obj[k], key); 
		}
	}
	
	return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	let count = 0;
	if (typeof obj === 'string') {
		count += obj === value ? 1 : 0;
	} else {
		for (let k in obj) {
			count += countValuesInObj(obj[k], value);
		}
	}

	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for (let key in obj) {
		if (typeof obj[key] !== 'string') {
			replaceKeysInObj(obj[key], oldKey, newKey);
		}

		if (key === oldKey) {
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
		}
	}
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if (n <= 0) {
		return null;
	} else if (n === 1) {
		return [0, 1];
	} else {
		let previous = fibonacci(n - 1);
		let newNum = previous[previous.length - 2] + previous[previous.length - 1];
		return [...previous, newNum];
	}
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) {
		return null;
	} else if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return nthFibo(n - 1) + nthFibo(n - 2);
	}
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	let first = array[0].toUpperCase()
	if (array.length === 1) {
		return [first];
	} else {
		return [first, ...capitalizeWords(array.slice(1))];
	}
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	let first = array[0][0].toUpperCase() + array[0].slice(1);
	if (array.length === 1) {
		return [first];
	} else {
		return [first, ...capitalizeFirst(array.slice(1))];
	}
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	let sum = 0;

	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			if (obj[key]%2 === 0) {
				sum += obj[key];
			}
		} else if (typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		}
	}

	return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	let output = [];

	for (let element of array) {
		if (!Array.isArray(element)) {
			output.push(element);
		} else {
			output.push(...flatten(element));
		}
	}

	return output;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	let firstLetter = str[0];
	
	if (str.length === 1) {
		let output = {};	
		output[firstLetter] = 1;
		return output;
	} else {
		let output = letterTally(str.slice(1));
		if (!output[firstLetter]) {
			output[firstLetter] = 1;
		} else {
			output[firstLetter] += 1;
		}
		return output;
	}
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	if (list.length === 1) {
		return list
	} else {
		if (list[0] !== list[1]) {
			return [list[0], ...compress(list.slice(1))];
		} else {
			return compress(list.slice(1));
		}
	}
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	if (array.length === 1) {
		array[0].push(aug);
		return array;
	} else {
		array[0].push(aug);
		return [array[0], ...augmentElements(array.slice(1), aug)];
	}
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	if (array.length === 1) {
		return array;
	} else if (array[0] === 0 && array[1] === 0) {
		return minimizeZeroes(array.slice(1));
	} else {
		return [array[0], ...minimizeZeroes(array.slice(1))];
	}
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	if (array.length === 1) {
		return [Math.abs(array[0])];
	} else {
		return [Math.abs(array[0]), ...alternateSign(array.slice(1)).map(x => -x)];
	}
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	let nums = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
	};

	let firstChar = Object.keys(nums).includes(str[0]) ? nums[str[0]] : str[0];

	if (str.length === 1) {
		return firstChar;
	} else {
		return firstChar + numToText(str.slice(1));
	}
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target) {
	let min = 0
	let max = array.length;
	let mid = Math.floor(min + (max - min) / 2);
	
	if (target === array[mid]) {
		return mid;
	} else if (max === min + 1) {
		return null;
	} else if (target < array[mid]) {
		return binarySearch(array.slice(0, mid), target);
	} else if (target > array[mid]) {
		let secondHalfIndex = binarySearch(array.slice(mid, max), target);
		return secondHalfIndex ? mid + secondHalfIndex : null;
	}
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
	if (array.length === 1) {
		return array;
	} else {
		let min = 0;
		let max = array.length;
		let mid = Math.floor(min + (max - min) / 2);
		
	}
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
	if (Array.isArray(input)) {
		let output = [];
		for (let element of input) {
			output.push(clone(element));
		}
		return output;
	} else if (typeof input === 'object') {
		let output = {};
		for (let key in input) {
			output[key] = clone(input[key]);
		}
		return output;
	} else {
		return input;
	}
};
