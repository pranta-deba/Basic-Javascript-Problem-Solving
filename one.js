function cubeNumber(e) {
  if (typeof e == "number") {
    return e ** 3;
  } else {
    return "Invalid Number!";
  }
}

let result = cubeNumber(3);
console.log(result);
