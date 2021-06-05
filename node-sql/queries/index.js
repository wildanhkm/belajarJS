// let array = [0, 1, 2, 3, 4, 5];
// console.log(array[1]);
// console.log("For loop");
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// console.log("=========");
// console.log("While loop");
// let index = 0;
// while (index < array.length) {
//   console.log(array[index]);
//   index++;
// }
// console.log("=========");

// console.log("Fibonacci 1-100");
// const number = 100;
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log(n1);
// console.log(n2);

// nextTerm = n1 + n2;

// while (nextTerm <= number) {
//   console.log(nextTerm);

//   n1 = n2;
//   n2 = nextTerm;
//   nextTerm = n1 + n2;
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }

// const input = "SeLamat PAGi semua haloo";

// function kapitalSemuaHurufPertama(kalimat) {
//   let kalimatSplit = kalimat.toLowerCase().split(" ");
//   for (let i = 0; i < kalimatSplit.length; i++) {
//     kalimatSplit[i] =
//       kalimatSplit[i].charAt(0).toUpperCase() + kalimatSplit[i].substring(1);
//   }
//   return kalimatSplit.join(" ");
// }
// console.log(kapitalSemuaHurufPertama(input));

// function kapitalHurufPertama(kalimat) {
//   let kalimatSplit = kalimat.toLowerCase().split(" ");
//   kalimatSplit[0] =
//     kalimatSplit[0].charAt(0).toUpperCase() + kalimatSplit[0].substring(1);
//   return kalimatSplit.join(" ");
// }
// console.log(kapitalHurufPertama(input));

const input = "aaabbcccaaaac";
let a = 0,
  b = 0,
  c = 0;
for (let index = 0; index < input.length; index++) {
  if (input[index] == "a") {
    a++;
  } else if (input[index] == "b") {
    b++;
  } else {
    c++;
  }

  if (index == 7) {
    console.log(`A = ${a}\nC = ${c}`);
    a = 0;
    c = 0;
  }
}
console.log(`A = ${a}`);
console.log(`B = ${b}`);
console.log(`C = ${c}`);
