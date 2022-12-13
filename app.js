function convertToRoman() {
  let romanToInt = {
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
    I: 1
  };
    
  let num = document.getElementById("userInput").value;
  let roman = "";
    
  for (let latin in romanToInt) {
    while (num >= romanToInt[latin]) {
      roman += latin;
      num -= romanToInt[latin];
      }
    }

  document.getElementById("outputValue").innerHTML = roman;
}


