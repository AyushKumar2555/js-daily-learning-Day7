// ==============================
//  JavaScript Loops - Day 7
// ==============================

//  1. for loop
// Used when the number of iterations is known
let n = 12;
for (let i = 1; i <= n; i++) {
    console.log("Hello World");
}

//  2. for...in loop
// Used to iterate over properties (keys) of an object
let obj = {
    name: "ayush",
    age: 20
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);  // Template literals to access keys and values
}
console.log(obj);  // Optional: logs the complete object
//  3. while loop
// Runs while the condition is true
let i = 1;
while (i <= 12) {
    console.log(i);  // Prints numbers from 1 to 12
    i++;
}

//  4. do...while loop
// Runs at least once before checking the condition
let j = 1;
do {
    console.log("India");  // Will print "India" 10 times
    j++;
} while (j <= 10);

//  5. Table Printing Exercise
// Printing the multiplication table of a given number
let t = 3;
for (let i = 1; i <= 10; i++) {
    console.log(`${t} * ${i} = ${t * i}`);  // Example: 3 * 1 = 3
}