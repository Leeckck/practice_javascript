let a = 1;
let b = 1;
let tmp = 0;
console.log(a);

for (let i = 0; i < 50; i++) {
  console.log(b);

  tmp = a+b;
  a = b;
  b = tmp;

}