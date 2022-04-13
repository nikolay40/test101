var a = Number(prompt('Введите первый операнд', 'number')); 
var operator = prompt('Введите оператор (только +-*/)', 'value');
var b = Number(prompt('Введите второй операнд', 'number'));
switch (operator) {
    case '+':
      var result = a + b;
      alert(`Результат ${a} + ${b} = ${result}`);
      break;
    case '-':
      var result = a - b;
      alert(`Результат ${a} - ${b} = ${result}`);
      break;
    case '*':
      var result = a * b;
      alert(`Результат ${a} * ${b} = ${result}`);
      break;
    case '/':
      var result = a / b;
      alert(`Результат ${a} / ${b} = ${result}`);
      break;
    default:
      alert(`К сожалению мы не можем выполнить это действие с оператором ${operator}`);
  }