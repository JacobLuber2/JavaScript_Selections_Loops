// Exercise 1 Section
let i = 1
for (;i <= 99; i++) {
if (i % 2 == 0) {
continue;
} else {
console.log(i);
}
}
let j = 1;
while (j <= 99) {
    if (j % 2 == 0) {
        j++;
        continue;
    } 
    console.log(j);
    j++;
}
let k = 1;
do {
if (k % 2 == 0) {
k++
continue;
}
console.log(k);
k++
} while (k <= 99);
// Exercise 2 Section
for (let l = 1; l <= 99; l++) {
if (l % 3 == 0) {
console.log(l, "FIZZ");
} else if (l % 5 == 0) {
console.log(l, "BUZZ");
} else if (l % 15 == 0) {
console.log(l, "FIZZBUZZ");
} else {
console.log(l)
}
}
let m = 1;
while (m <= 99) {
if (m % 3 == 0) {
console.log(m, "FIZZ");
m++
continue;
} else if (m % 5 == 0) {
console.log(m, "BUZZ");
m++
continue;
} else if (m % 15 == 0) {
console.log(m, "FIZZBUZZ");
m++
continue;
} else {
console.log(m);
m++
}
} 
let n = 1;
do {
if (n % 3 == 0) {
console.log(n, "FIZZ");
n++
continue;
} else if (n % 5 == 0) {
console.log(n, "BUZZ");
n++
continue;
} else if (n % 15 == 0) {
console.log(n, "FIZZBUZZ");
n++
continue;
} else {
console.log(n)
n++
}
} while (n <= 99);

// exercise 4 section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let o = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 1; i <= o; i++) {
if (i == value) {
console.log(`FOUND VALUE ${value}`);
break;
} 
if (i == o) {
console.log(`DID NOT FIND VALUE ${value}`)
}
}

// bonus
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (;start <= end; start++) {
if (start % fizzDivisor == 0) {
console.log(start, "FIZZ");
} else if (start % buzzDivisor == 0) {
console.log(start, "BUZZ");
} else if (start % fizzDivisor == 0 && start % buzzDivisor == 0) {
console.log(start, "FIZZBUZZ")
} else {
console.log(start);
}
}
 
