export default function getFullBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return budget;
}
