"use strict";
const fullName = "Theodore Redlon";
const age = 25;
const birthday = "January 24";
const pineapplePizza = false;
const lifeEvents = [
  "I was born in Marquette, Michigan.",
  "I went to Grand Circus.",
  "I participated in basketball, football, and competitive video games.",
  "I love to be with friends.",
];
if (pineapplePizza) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10+1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
