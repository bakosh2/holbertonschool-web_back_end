export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const currentYear = new Date().getFullYear();

  budget[`income-${currentYear}`] = income;
  budget[`gdp-${currentYear}`] = gdp;
  budget[`capita-${currentYear}`] = capita;

  return budget;
}
