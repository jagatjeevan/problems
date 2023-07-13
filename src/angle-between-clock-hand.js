/**
 * Find the angle formed by the hour and minute hand of the clock.
 * Input : hour hand is at 3 and minute hand is at 12.
 * Output : 90
 * Input : hour hand is at 1 and minute hand is at 12.
 * Output : 30
 *
 * */

const hourHand = (hrHandAt, minHandAt) => {
  //  60 ticks mins = 5 ticks hour
  //  1 tick = 5/60 ticks
  //  x ticks = (5*x) / 60

  if (minHandAt === 12) return hrHandAt;
  return hrHandAt + (5 * minHandAt) / 60;
};

const getAngle = (hrHandAt, minHandAt) => {
  const oneMinAngle = 6; // degree : 360 degree = 60 ticks
  const exactHourHandAt = hourHand(hrHandAt, minHandAt);
  const hourAngle = exactHourHandAt * 5 * oneMinAngle;
  const minAngle = minHandAt * 5 * oneMinAngle;
  return Math.abs(hourAngle - minAngle);
};

module.exports = getAngle;
