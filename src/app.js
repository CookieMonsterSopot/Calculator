// Clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}
// Display values
function display(value) {
  document.getElementById("result").value += value;
}
// Evaluates the expression and returns result
function calculate() {
  let p = document.getElementById("result").value;
  let q = eval(p);
  document.getElementById("result").value = q;
  
// Create new place for history item
  document.getElementById("History").innerHTML += p + "=" + q + "<br/>";
}
