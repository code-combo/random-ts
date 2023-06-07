// const siblings = ["Oluwaseyi", "Oluwapelumi", "Similoluwa"];
// siblings.push("me🥹");
// siblings[0] = 'shegzy';

// console.log(siblings)

// Objects in Typescript

// let futarian = {
//   name: "Toluwanimi Atofarati",
//   age: 20,
//   matricNo: "IFT/20/5031",
//   level: 200
// }

// futarian = {
//   name: 'Similoluwa',
//   age: 17,
//   matricNo: "NILL",
//   level: 0
// }
// console.log(futarian);

// EXPLICIT TYPES
let character: string | number;
character = "Toluwanimi"
console.log(character);


// ARRAYS
let siblings: string[] = [];
siblings.push('seyi', 'pelumi', 'simi');
console.log(siblings);


// UNION TYPES
let ninjas: (string | number | boolean)[] = ["ogbeni!"];
ninjas.push('alaye', 100, "idan", false, "high don", true);
console.log(ninjas);

// OBJECTS
let kickOne: object;
kickOne = {
  model: "Nike",
  name: "Sb Dunk Jarritos"
}

let kickTwo: {
  model: string,
  name: string,
  year: number,
  price: string
}

kickTwo = {
  model: "Nike",
  name: "Air Max",
  year: 2015,
  price: "$300"
}

console.log(kickOne, kickTwo); 

// DYNAMIC(any)

let kickThree: any = [];
kickThree = ["Nike Air Force"];
kickThree = false;

// FUNCTION BASICS
let greet: Function;
greet = () => {
  console.log('hello, world');
}

const add  = (a: number, b: number, c: string | number  = 10) => {
  console.log(a + b);
  console.log(c);
}

add(5,5);

const minus = (a:number, b:number): number => {
  return a - b;
}
let result = minus(1, 2);

// ALIASES

type futaStudent = {name: string, matricNo: number | string, CGPA: number}
type receiversEmoji = string | boolean;

const rxn = (emoji: receiversEmoji) => {
  console.log(`Toluwanimi reacted "${emoji}" to your message`)
}; rxn(true);


const futarian = (student: futaStudent) => {
  console.log(`${student.name} had a CGPA of ${student.CGPA} this session (${student.matricNo})`);
}; futarian({
  name: "Toluwanimi",
  matricNo: "IFT/20/5031",
  CGPA: 3.6
});

// FUNCTION SIGNATURES

    // example1
  let hello: (a:string, b:string) => void
  hello = (name, time) => {
    console.log(`good${time} ${name}`);
  }

    // example2
  let calc: (tNum1: number, tNum2: number, tAction: string) => number;
  calc = (num1, num2, action) => {
    if(action === "add") {
      return num1 + num2;
    } else {
      return num1 - num2;
    }
  };
  calc(2, 5, add);


    // example3

