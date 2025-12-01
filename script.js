function palindrome(str){
  // Step 1: remove all non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Step 2: check if cleaned string equals its reverse
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

module.exports = palindrome;
