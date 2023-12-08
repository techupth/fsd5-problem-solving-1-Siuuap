//Exercise 2: Valid Palindrome
String.prototype.eiei = function () {
  return this.replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
};

const isPalindrome = function (s) {
  //Start Coding here
  let newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let newStrReverse = newStr.eiei();
  return newStr === newStrReverse ? true : false;
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
