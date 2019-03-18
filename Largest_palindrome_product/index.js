// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково. Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.

// Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.

let mass = [];

const isPalindrome = () => {
  let max = 0;
  for (let a = 999; a > 99; a -= 1) {
    for (let b = 999; b > 99; b -= 1) {
      let num = a * b;
      let strNum = '' + (num);
      if (strNum === strNum.split("").reverse().join("") && num > 900000) {
        mass.push(num);
      }
    }
  }
  return mass.pop();
};

isPalindrome();