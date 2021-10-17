function convertToRoman(arabic) {
  let codes = {
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

  let romanNr = "";
  let remain = arabic;
  for (let code in codes) {
    let charNr = Math.floor(remain / codes[code]);
    romanNr += code.repeat(charNr);
    remain -= codes[code] * charNr;
  }

  return romanNr;
}

function convertToArabic(roman) {
  let codes = {
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

  let arabic = 0;
  let prev = 0;
  for (let ch of roman) {
    prev = codes[ch];
    console.log(prev);
    if (codes[ch] >= prev) arabic += codes[ch];
    return "It is not a roman number...";
  }
  return arabic;
}

//console.log(convertToRoman(901));
//console.log(convertToArabic("XII"));
