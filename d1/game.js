const input = require("./input.json");

const frequency = (data) => data.reduce((acc, v) => acc + v, 0);
const doubleFrequency = (frequencies) => {
  const frequenciesMap = { 0: 1 };
  let doubleNum = null;
  let total = 0;

  while (doubleNum === null) {
    frequencies.forEach((value) => {
      total = total + value;

      if (frequenciesMap[total] && doubleNum === null) {
        doubleNum = total;
      } else {
        frequenciesMap[total] = 1;
      }
    });
  }

  return doubleNum;
};

console.log("Test 1.1 returns 3:", frequency([+1, -2, +3, +1]));
console.log("Test 1.2 returns 3:", frequency([+1, +1, +1]));
console.log("Test 1.3 returns 0:", frequency([+1, +1, -2]));
console.log("Test 1.4 returns -6:", frequency([-1, -2, -3]));
console.log("Test 1.x returns:", frequency(input));
console.log("----------------");
console.log("Test 2.1 returns 0:", doubleFrequency([+1, -1]));
console.log("Test 2.2 returns 10:", doubleFrequency([+3, +3, +4, -2, -4]));
console.log("Test 2.3 returns 5:", doubleFrequency([-6, +3, +8, +5, -6]));
console.log("Test 2.4 returns 14:", doubleFrequency([+7, +7, -2, -7, -4]));
console.log("Text 2.x returns:", doubleFrequency(input));
