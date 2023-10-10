"use strict";
const calculatePay = (wage, hours) => {
  if (hours < 40) return wage * hours;
  let overTimeWage = wage * 1.5;
  let extra = hours - 40;
  return 40 * wage + extra * overTimeWage;
};

const weeksToGoal = (wage, hours, goal) => {
  return Math.ceil(goal / calculatePay(wage, hours));
};

console.log(weeksToGoal(10, 50, 1000000));
