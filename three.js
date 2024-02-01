function sortMaker(arr) {
  if (arr.length !== 2) {
    return "Invalid input: Array must have exactly two elements.";
  }
  if (arr[0] < 0 || arr[1] < 0) {
    return "valid Input";
  } else if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] > 0 && arr[1] > 0) {
    let sortArr = arr.sort(function (a, b) {
      return a - b;
    });
    return sortArr;
  }
}

let result = sortMaker([19, -19]);
console.log(result);
