'use strict'
const calculator = require('./test-modules-1.js');
const newCalculator =require('./test-modules-2.js')

const calc = new calculator();
// const newCalculator = new newCalculatorulator();

const result = calc.add(1,2);
const result1 = calc.multiplay(1,2);
const result2 = calc.substract(1,2);
const result3 = calc.devide(1,2);
console.log(result,result1,result2,result3);


const modernResult = newCalculator.add(1,3);
const modernResult1 = newCalculator.substract(1,3);
const modernResult2 = newCalculator.devide(1,3);
const modernResult3 = newCalculator.multiplay(1,3);

console.log(modernResult,modernResult1,modernResult2,modernResult3);


// cashing

require('./test-modules-3.js') ();
require('./test-modules-3.js') ();
require('./test-modules-3.js') ();

