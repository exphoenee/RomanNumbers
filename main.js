function convertToRoman(num) {
  let codes = [
    { value: 1000, char: "M" },
    { value: 900, char: "CM" },
    { value: 500, char: "D" },
    { value: 400, char: "CD" },
    { value: 100, char: "C" },
    { value: 90, char: "XC" },
    { value: 50, char: "L" },
    { value: 40, char: "XL" },
    { value: 10, char: "X" },
    { value: 9, char: "IX" },
    { value: 5, char: "V" },
    { value: 4, char: "IV" },
    { value: 1, char: "I" },
  ];

  let romanNr = "";

  let remain = num;

  for (let code of codes) {
    let charNr = Math.floor(remain / code.value);

    for (let i = 0; i < charNr; i++) {
      romanNr += code.char;
    }

    remain -= code.value * charNr;
  }

  return romanNr;
}

//* SeaShore 's solution
function solution(number) {
  // convert the number to a roman numeral
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var ans = "";
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}

//* thrap's solution
function solution(number) {
  const table = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  for (let [num, notation] of table) {
    if (number >= num) return notation + solution(number - num);
  }
  return "";
}

console.log(convertToRoman(901));
