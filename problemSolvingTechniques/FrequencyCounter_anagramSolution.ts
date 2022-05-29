function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookup = {};
  let isAnagram = true;

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

console.log(validAnagram("aab", "Aba"));
