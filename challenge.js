"use strict";
const calculatePay = (wage, hours) => {
  let paycheck = 40*wage;
  if (hours <= 40) return paycheck;
  const overTimeWage = wage * 1.5;
  const extra = hours - 40;
  paycheck += extra*overTimeWage
  return paycheck;
};

const weeksToGoal = (wage, hours, goal) => {
  return Math.ceil(goal / calculatePay(wage, hours));
};

console.log(weeksToGoal(10, 50, 1000000));
