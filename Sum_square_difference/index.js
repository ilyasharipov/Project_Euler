// The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385.

// The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025.

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Сумма квадратов первых десяти натуральных чисел равна 12 + 22 + ... + 102 = 385.

// Квадрат суммы первых десяти натуральных чисел равен (1 + 2 + ... + 10)2 = 552 = 3025.

// Следовательно, разность между суммой квадратов и квадратом суммы первых десяти натуральных чисел составляет 3025 − 385 = 2640.

// Найдите разность между суммой квадратов и квадратом суммы первых ста натуральных чисел.

const getSumOfSquare = () => {
    const iter = (num, acc) => {
      if (num > 100) {
        return acc;
      }
  
      const sum = num ** 2;
      return iter(num += 1, acc += sum);
    };
    return iter(1, 0);
  };
  
  const getSquareOfSum = () => {
    const iter = (num, acc) => {
      if (num === 100) {
        return acc ** 2;
      }
  
  
      return iter(num += 1, acc += num);
    };
    return iter(0, 0);
  };
  getSquareOfSum() - getSumOfSquare();