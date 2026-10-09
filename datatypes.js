// String - textual data
let name = "Raghvendra";//double qoutes
let city = 'Bangalore';//single quotes
let message = `Hello, ${name}`;//bacticks
let ci=`my city is,${city}`
console.log(message)
console.log(ci)


// numbers 
let age = 19;
let price = 99.50;
let temperature = -5;

// boolean

let isStudent = true;
let isGraduated = false;

//undefined
let result; 
// const happy;

console.log(result); // undefined
// console.log(happy) error

//null
let marks=null
// big numbers 
let bigNumber = 12345678901234567890n;

// Object -it stores diffrent types of datatypes datatypes
 let classroom = {
    key:"value",
    student:"Raghvendra",
    age:19,
    cgpa:8.8,
    class:"3rd sem",
    fruit:["apple","banana" ,"mango"],
    class:{roll:21,age:254}
 }

//  array -it stores same datatypes
const classs =["css","apple","mango"]
let num=[12,34,56,78,97,"hello"]
let happy=[{clas:12},{cop:"ofj"}]

console.log(num)

// How to check datatype - we can use type of operator to check datatype
let name1 = "Raghvendra";
let age1 = 19;
let isStudent1 = true;
let result1;
let hello=null;


console.log(typeof name1);      // string
console.log(typeof age1);       // number
console.log(typeof isStudent1); // boolean
console.log(typeof result1);    // undefined
console.log(typeof hello);    // object

// Type casting -type conversion

// string to number
let age2 = "19";

let convertedAge = Number(age2);

console.log(convertedAge);        // 19
console.log(typeof convertedAge); // number

// number to string
let conage=19;
let convertage= String(conage)
console.log(typeof(conage))//
console.log(typeof(convertage))

// type coercion

console.log("5"+23)//+ is used for concatenation
console.log("5"-2)//- it converts string to number then perform the operations