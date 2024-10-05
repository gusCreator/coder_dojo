const resultado = document.getElementById("resultado");

function calcular(operando1, operador, operando2) {
  const op1 = Number(operando1)
  const op2 = Number(operando2)
  // operador = "Resta"
  event.preventDefault();
  if (operador === '+') {
    resultado.innerHTML = op1 + op2
  } else if (operador === '-') {
    resultado.innerHTML = op1 - op2
  } else if (operador === 'x') {
    resultado.innerHTML = op1 * op2
  } else if (operador === '/') {
    resultado.innerHTML = op1 / op2
  } else {
    resultado.innerHTML = "No puedo calcularlo"
  }
}