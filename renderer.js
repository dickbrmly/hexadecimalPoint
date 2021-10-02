// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

import { state, clear, equal } from './state.js';
//let state = new Calculator();

import { shift, integer, modeBin, modeHex } from './rows/one.js'
import { recipocate, radius, naturalExponent, ln, abs } from './rows/two.js'
import { sin, cos, tan, rectangular, polor } from './rows/three.js'
import { mask, priv, pub, xxor, shiftLeft } from './rows/four.js'
import { push, pop, top, nor, nand } from './rows/five.js'
import { f, or, and, back } from './rows/six.js'
import { a, b, c, d, e } from './rows/seven.js'
import { seven, eight, nine, exp, mod } from './rows/eight.js'
import { four, five, six, multiply, divide } from './rows/nine.js'
import { one, two, three, add, subtract } from './rows/ten.js'
import { zero, period } from './rows/eleven.js'

/**********************************************************************************************************************
 *                                     Listeners for all keyboard entries
 * 
 ***********************************************************************************************************************/
clear();
document.getElementById("shift").addEventListener("click", shift); //row 1
document.getElementById("littleEndian").addEventListener("click", littleEndian);
document.getElementById("int").addEventListener("click", integer);
document.getElementById("bin").addEventListener("click", modeBin);
document.getElementById("hex").addEventListener("click", modeHex);

document.getElementById("1/x").addEventListener("click", recipocate); // row 2
document.getElementById("radius").addEventListener("click", radius);
document.getElementById("e^x").addEventListener("click", naturalExponent);
document.getElementById("ln").addEventListener("click", ln);
document.getElementById("abs").addEventListener("click", abs);

document.getElementById("sin").addEventListener("click", sin); // row 3
document.getElementById("cos").addEventListener("click", cos);
document.getElementById("tan").addEventListener("click", tan);
document.getElementById("rectangular").addEventListener("click", rectangular);
document.getElementById("polor").addEventListener("click", polor);

document.getElementById("mask").addEventListener("click", mask); //row 4
document.getElementById("private").addEventListener("click", priv);
document.getElementById("public").addEventListener("click", pub);
document.getElementById("xor").addEventListener("click", xxor);
document.getElementById("shiftLeft").addEventListener("click", shiftLeft);

document.getElementById("push").addEventListener("click", push); //row 5
document.getElementById("pop").addEventListener("click", pop);
document.getElementById("top").addEventListener("click", top);
document.getElementById("nor").addEventListener("click", nor);
document.getElementById("nand").addEventListener("click", nand);

document.getElementById("F").addEventListener("click", f); //row 6
document.getElementById("or").addEventListener("click", or);
document.getElementById("and").addEventListener("click", and);
document.getElementById("back").addEventListener("click", back);
document.getElementById("clear").addEventListener("click", clear);

document.getElementById("A").addEventListener("click", a); //row 7
document.getElementById("B").addEventListener("click", b);
document.getElementById("C").addEventListener("click", c);
document.getElementById("D").addEventListener("click", d);
document.getElementById("E").addEventListener("click", e);

document.getElementById("7").addEventListener("click", seven); //row 8
document.getElementById("8").addEventListener("click", eight);
document.getElementById("9").addEventListener("click", nine);
document.getElementById("exponential").addEventListener("click", exp);
document.getElementById("mod").addEventListener("click", mod);

document.getElementById("4").addEventListener("click", four); //row 9
document.getElementById("5").addEventListener("click", five);
document.getElementById("6").addEventListener("click", six);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

document.getElementById("1").addEventListener("click", one); //row 10
document.getElementById("2").addEventListener("click", two);
document.getElementById("3").addEventListener("click", three);
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);

document.getElementById("0").addEventListener("click", zero); //row 11
document.getElementById("period").addEventListener("click", period);
document.getElementById("equal").addEventListener("click", equal);