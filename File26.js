function Monthly(){
let Gross=document.getElementById('gs').value;
let Transport=document.getElementById('ta').value;
let Insuarance=document.getElementById('hi').value;
let Tax=document.getElementById('tx').value;
let MSalary=Gross+Transport-Insuarance-Tax;
document.write(MSalary);
}