// const triangleAnimation = document.querySelector(".triangle");

const input = document.querySelector("#input");
const output = document.querySelector("#output");

const letters = {
  a: "9",
  b: "8",
  c: "6",
  d: "1,2",
  e: "3",
  f: "0,7",
  g: "6,9",
  h: "1,4",
  i: "1",
  j: "0,9",
  k: "1,7",
  l: "5",
  m: "4,4",
  n: "4",
  o: "0",
  p: "2",
  q: "0,0",
  r: "4,1",
  s: "3,3",
  t: "0,1",
  u: "U",
  v: "7,7",
  w: "3,0",
  x: "1,1",
  y: "7,1",
  z: "7",
  1: "|1|",
  2: "|2|",
  3: "|3|",
  4: "|4|",
  5: "|5|",
  6: "|6|",
  7: "|7|",
  8: "|8|",
  9: "|9|",
  0: "|0|",
};

// a function that transforms alphabet letters to "##@b><" language letters
function letterToNumber(letter) {
  return letter
    .toLowerCase()
    .split("")
    .map((el) => {
      return letters[el] ? letters[el] : el;
    })
    .join("/");
}

// triangleAnimation.addEventListener("click", () => {
//   // console.log(input.value);
//   output.textContent = letterToNumber(input.value);
// });

// press enter to submit sentences
input.onkeydown = function (evt) {
  var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
  if (keyCode == 13) {
    output.textContent = letterToNumber(input.value);
  }
};
