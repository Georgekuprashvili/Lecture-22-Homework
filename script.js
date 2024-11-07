// 1
let Giorgi = [1, 2, 3, 4, 5, 6];
Giorgi.forEach((numbers) => {
  console.log(numbers * numbers);
});

// 2
let fruits = ["apple", "orange", "mango"];
fruits.forEach((fruit) => {
  console.log(fruit);
});

// 3
let numb = [1, 14, 14, 15, 16];
let sum = 0;

numb.forEach((n) => {
  sum += n;
});
console.log(sum);

// 4
let names = ["Giorgi", "Nini", "Mariami", "vaxo"];
names.forEach((namme, index) => {
  console.log(`${namme} არის რიგში  ${index + 1}`);
});

// 5
let Nm = [1, 3, 4, 5, 99, 44];
Nm.forEach((GG) => {
  if (GG % 2 === 0) {
    console.log(GG);
  }
});

// 6
let Nn = [1, 3, 4, 5, 99, 44];
let another = Nn.map((one) => {
  return one * one;
});
console.log(another);

// 7
let names2 = ["Giorgi", "Nini", "Mariami", "vaxo"];
let low = names2.map((one) => {
  return one.toLowerCase();
});
console.log(low);

// 8
let numbers1 = [1, 3, 4, 5, 99, 44];
let newnumb = numbers1.map((one) => {
  return (one += 10);
});
console.log(newnumb);

// 9
let names3 = [
  { name: "Giorgi", score: 100 },
  { name: "Nika", score: 99 },
  { name: "Giorgi", score: 98 },
  { name: "Dato", score: 97 },
];
let onlyname = names3.map((one) => {
  return one.name;
});
console.log(onlyname);

// 10

let numbers2 = [1, 3, 4, 5, 99, 44];
let newnumbers = numbers2.map((one) => {
  if (one % 2 === 0) {
    return one * 2;
  } else {
    return one;
  }
});
console.log(newnumbers);

// 11
let numbers3 = [1, 3, 4, 5, 99, 44];
let newnumbers1 = numbers3.filter((one) => {
  return one % 2 === 0;
});
console.log(newnumbers1);

// 12
let names4 = ["Giorgi", "Nini", "Mariami", "vaxo"];
let newnames = names4.filter((one) => {
  return one.length > 5;
});
console.log(newnames);

// 13

let newnumbers4 = [-10, -20, 1, 3, 4, 5, 99, 44];
let newnumbers2 = newnumbers4.filter((one) => {
  return one > 0;
});
console.log(newnumbers2);

// // 14
let product = [
  { name: "Coffee", price: 10 },
  { name: "Tea", price: 5 },
  { name: "Sugar", price: 3 },
  { name: "Milk", price: 2 },
  { name: "Bread", price: 8 },
];
let newproduct = product.filter((one) => {
  return one.price > 100;
});

console.log(newproduct);

// 15
let numberall = [1, 3, 4, 5, 99, 44];
let newnumbers50 = numberall.filter((one) => {
  return one > 50;
});
console.log(newnumbers50);

// 16
let index = 0;
do {
  console.log(index);
  index++;
} while (index < 50);

// 17
let all = [1, 3, 4, 5, 99, 44];
let allsum = 0;
let index1 = 0;

while (index1 < all.length) {
  allsum += all[index1];
  index1++;
}
console.log(allsum);

// 18
let first = 1;
while (first < 20) {
  console.log(first);
  first += 2;
}

// 19

let second = 20;
while (second > 10) {
  console.log(second);
  second--;
}

// 20
// let clas = [
//   { name: "Giorgi", score: 100 },
//   { name: "Nika", score: 99 },
//   { name: "Giorgi", score: 98 },
//   { name: "Dato", score: 97 },
// ];

// let one = 0;
// while (one < clas.length) {
//   console.log(clas[one].name);
// }
