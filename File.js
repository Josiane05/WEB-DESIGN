function Calculate() {
let A=prompt("Enter value of A");
let B=prompt("Enter value of B");
let prod=A*B;
document.write(prod);
}

function Change() {
document.getElementById('this').innerHTML="Display This";
}

function Mult() {
let A1=document.getElementById('n1').value;
let B1=document.getElementById('n2').value;
let prod=A1*B1;
document.getElementById('res').innerHTML=prod;
}

function Add() {
let A1=document.getElementById('n1').value;
let B1=document.getElementById('n2').value;
let prod=A1+B1;
document.write(prod);
}

function Subs() {
let A1=document.getElementById('n1').value;
let B1=document.getElementById('n2').value;
let prod=A1-B1;
document.write(prod);
}