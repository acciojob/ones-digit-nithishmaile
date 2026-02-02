function onesDigit(n) {
  // your code here
n = n.toString();        // convert number to string safely
  return Number(n[n.length - 1]);
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
