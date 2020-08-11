import { compose, pipe } from "lodash/fp";

let numbers = [1, 2, 3];
numbers.map((number) => number * 2);

setTimeout(() => console.log("Hello"), 1000);

let input = "   JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDev = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapInDev);
transform(input);

function sayHello(params) {
  return "Hello World";
}

let fn = sayHello; //passing a refernce of function sayHello
// fn is an alias of sayHello
fn();
sayHello();

function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);
//=====================================================

function greet1() {
  return function () {
    return "Hello World";
  };
}

let fn1 = greet1();
let message1 = fn1();
