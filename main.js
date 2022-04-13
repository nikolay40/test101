let a = prompt('Введите первый операнд', 'number'); 
let operator = prompt('Введите оператор (только +-*/)', 'value');
let b = prompt('Введите второй операнд', 'number');
let a1 = Number(a);
let b1 = Number(b);
switch (operator) {
    case '+':
      var result = a1 + b1;
      alert(`Результат ${a1} + ${b1} = ${result}`);
      break;
    case '-':
      var result = a1 - b1;
      alert(`Результат ${a1} - ${b1} = ${result}`);
      break;
    case '*':
      var result = a1 * b1;
      alert(`Результат ${a1} * ${b1} = ${result}`);
      break;
    case '/':
      var result = a1 / b1;
      alert(`Результат ${a1} / ${b1} = ${result}`);
      break;
    default:
      alert(`К сожалению мы не можем выполнить это действие с оператором ${operator}`);
  }