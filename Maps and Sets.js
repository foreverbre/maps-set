//What does the following code return?

new Set([1, 1, 2, 2, 3, 4]); // 1, 2, 3, 4

[...new Set("referee")].join(""); //ref

//What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true); //true
m.set([1, 2, 3], false); //true, false

//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (nums) => new Set(nums).size !== nums.length;

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

/*Write a function called vowelCount which accepts a string 
and returns a map where the keys are numbers and the values 
are the count of the vowels in the string.*/

const vowels = (char) => "aeiou".includes(char);

const vowelCount = (str) => {
  const vowelCnt = new Map();
  for (let char of str) {
    let lowerChar = char.toLowerCase();
    if (vowels(lowerChar)) {
      if (vowelCnt.has(lowerChar)) {
        vowelCnt.set(lowerChar, vowelCnt.get(lowerChar) + 1);
      } else {
        vowelCnt.set(lowerChar, 1);
      }
    }
  }
  return vowelCnt;
};
vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount("Colt"); // Map { 'o' => 1 }
