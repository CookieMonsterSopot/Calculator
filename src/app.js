// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}
// This function display values
function display(value) {
  document.getElementById("result").value += value;
}
// This function evaluates the expression and returns result
function calculate() {
  let p = document.getElementById("result").value;
  let q = eval(p);
  document.getElementById("result").value = q;
  console.log(p + " = " + q);
  document.getElementById("History").innerHTML += p + "=" + q + "<br/>";
}
