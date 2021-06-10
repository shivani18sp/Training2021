let result;
let operator;
function display(value)
{
    document.getElementById("calc").value+=value;
}
function solve() {
    operator=document.getElementById("calc").value;
    result = eval(operator);
    document.getElementById("calc").value = result;
}
function clr() {
    document.getElementById("calc").value=" ";
}