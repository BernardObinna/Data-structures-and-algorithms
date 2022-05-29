// the functions takes in 2 strings and checks if they form anagrams using the frequency counter pattern.
function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  let lookup: {} = {};
  let isAnagram: boolean = true;

  for (let letter of str1.toLowerCase()) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let key of str2.toLowerCase()) {
    if (!lookup[key]) {
      isAnagram = false;
      break;
    } else {
      lookup[key] -= 1;
    }
  }
  return isAnagram;
}

// time complexity O(n)

console.log(validAnagram("aab", "Aba"));
