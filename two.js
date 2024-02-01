function matchFinder(str1, str2) {
  if (typeof str1 == "string" && typeof str2 == "string") {
    for (const char of str1) {
      if (str2.includes(char)) {
        console.log(char);
        return true;
      }
    }
    return false;
  } else {
    return "Invalid String!";
  }
}
let result = matchFinder("John Doe", "ohn");
// let result = matchFinder('JavaScript','Code');
// let result = matchFinder('Peter Parker','Pen');
// let result = matchFinder("Peter Parker", "Pet");
console.log(result);
