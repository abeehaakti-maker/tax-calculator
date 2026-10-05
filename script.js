document.getElementById('calculate').addEventListener('click', function () {
  const income = parseFloat(document.getElementById('income').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const result = document.getElementById('result');
  try {
    const tax = calculateTax(income, rate);
    const net = calculateNetIncome(income, rate);
    result.textContent = 'Tax: ' + tax.toFixed(2) + '  |  Net income: ' + net.toFixed(2);
    result.className = '';
  } catch (e) {
    result.textContent = e.message;
    result.className = 'error';
  }
});
