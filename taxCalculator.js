// Tax calculation helpers. Works in the browser (global functions) and in Node (module.exports).
function validateInputs(income, rate) {
  if (typeof income !== 'number' || typeof rate !== 'number' || isNaN(income) || isNaN(rate)) {
    throw new Error('Income and rate must be numbers');
  }
  if (income < 0 || rate < 0) {
    throw new Error('Income and rate must not be negative');
  }
}

// rate is a percentage, e.g. 20 means 20%
function calculateTax(income, rate) {
  validateInputs(income, rate);
  return Math.round((income * rate) / 100 * 100) / 100;
}

function calculateNetIncome(income, rate) {
  validateInputs(income, rate);
  return Math.round((income - calculateTax(income, rate)) * 100) / 100;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateTax, calculateNetIncome };
}
