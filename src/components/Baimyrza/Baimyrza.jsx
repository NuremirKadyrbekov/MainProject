import React from 'react';

function Baimyrza() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name === 'num1' ? setNum1(value) : setNum2(value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculate = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setResult('Неверный ввод');
      return;
    }

    switch (operator) {
      case '+':
        setResult(parsedNum1 + parsedNum2);
        break;
      case '-':
        setResult(parsedNum1 - parsedNum2);
        break;
      case '*':
        setResult(parsedNum1 * parsedNum2);
        break;
      case '/':
        parsedNum2 !== 0 ? setResult(parsedNum1 / parsedNum2) : setResult('Деление на ноль невозможно');
        break;
      default:
        setResult('Выберите операцию');
    }
  };

  return (
    <div>
      <input type="number" name="num1" value={num1} onChange={handleInputChange} />
      <select name="operator" value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" name="num2" value={num2} onChange={handleInputChange} />
      <button onClick={calculate}>Вычислить</button>
      <div>Результат: {result}</div>
    </div>
  );
}

export default  Baimyrza;
