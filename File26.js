function Monthly(){
let Gross=parseInt(document.getElementById('gs').value);
let Transport=parseInt(document.getElementById('ta').value);
let Insuarance=parseInt(document.getElementById('hi').value);
let Tax=parseInt(document.getElementById('tx').value);
let MSalary=Gross+Transport-Insuarance-Tax;
document.write(MSalary);
}

function Annual(){
let Gross=parseInt(document.getElementById('gs').value);
let Transport=parseInt(document.getElementById('ta').value);
let Insuarance=parseInt(document.getElementById('hi').value);
let Tax=parseInt(document.getElementById('tx').value);
let MSalary=Gross+Transport-Insuarance-Tax;
let ASalary=MSalary*12;
document.write(ASalary);

}