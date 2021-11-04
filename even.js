const isEven  = function (num) {
  return num % 2 === 0;
}
const tenIsEven = isEven(10);
const twentyFiveIsEven = isEven(25);

console.log(tenIsEven);
console.log(twentyFiveIsEven);

console.log(isEven(65));
console.log(isEven(78));
console.log(isEven(33));
