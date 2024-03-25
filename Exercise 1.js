/*var name = "Tony";
const greeting = "hello";
console.log(greeting + name);

let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("small");
} else if (num < 100) {
  console.log("large");
} else {
  console.log("medium");
}

let evenNumber = 0;
while (evenNumber <= 12) {
  console.log(evenNumber);
  evenNumber = evenNumber + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
*/

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
}
