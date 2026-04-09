/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let res = 0;
  const costCar = 40;
  const cost = costCar * days;

  if (days >= 7) {
    res = cost - 50;
  } else if (days >= 3) {
    res = cost - 20;
  } else {
    res = cost;
  }

  return res;
}

module.exports = calculateRentalCost;
