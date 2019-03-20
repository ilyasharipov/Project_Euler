// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

// Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-ое простое число - 13.

// Какое число является 10001-ым простым числом?

const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    
    const iter = (counter, divisor) => {
      if (counter === divisor) {
        return true;
      } else if (counter % divisor === 0) {
        return false;
      }
      return iter(num, divisor + 1);
    };
    return iter(num, 2);
  };

const get10001PrimeNum = () => {
  const iter = (counter, acc) => {
    if (acc === 6) {
      return counter - 1;
    }
    
    if (isPrime(counter) === true) {
      return iter(counter + 1, acc += 1);
    }
    return iter(counter + 1, acc);
  }
  return iter(0, 0);
};

get10001PrimeNum();

// забивается стек, не знаю как оптимизировать. Вернусь позже..