function matchFinder(str1, str2) {
  if (typeof str1 == "string" && typeof str2 == "string") {
    if (str1.includes(str2)) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid String!";
  }
}
let result = matchFinder("John Doe", "ohn");
// let result = matchFinder('JavaScript','Code');
// let result = matchFinder('Peter Parker','Pen');
// let result = matchFinder("Peter Parker", "Pet");
console.log(result);
