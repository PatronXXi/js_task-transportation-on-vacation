/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const costCar = 40;
  const cost = costCar * days;
  const longDays = 7;
  const mediumDays = 3;

  if (days >= mediumDays) {
    totalCost = cost - 20;
  }

  if (days >= longDays) {
    totalCost = cost - 50;
  }

  if (days < mediumDays) {
    totalCost = cost;
  }

  return totalCost;
}
module.exports = calculateRentalCost;
