// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

// Простые делители числа 13195 - это 5, 7, 13 и 29.

// Каков самый большой делитель числа 600851475143, являющийся простым числом?

// Функция для нахождения простого числа
const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
  
    const iter = (counter, divisor) => {
      if (counter === divisor) {
        return `This number - ${num} is a prime.`;
      } else if (counter % divisor === 0) {
        return `This number - ${num} is not a prime.`;
      }
      return iter(num, divisor + 1);
    };
    return iter(num, 2);
  };
  
  // Вычисление всех делителей числа
  const divisorsOfNumber = (num) => {
    const iter = (counter, divisor, acc) => {
      if (divisor > counter) {
        return acc;
      }
      if (counter % divisor === 0) {
        acc.push(divisor);
        counter /= divisor; // Делим сразу же, что бы уменьшить заданное число
      }
      return iter(counter, divisor + 1, acc.slice());
    };
    return iter(num, 2, []);
  };
  
  divisorsOfNumber(600851475143)
    .map(n => isPrime(n))
    .pop();