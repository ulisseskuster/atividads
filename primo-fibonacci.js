function voltar() {
    window.history.back();
  }
  
  function verificarPrimoFibonacci() {
    const number = parseInt(document.getElementById("number").value);
  
    function isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    function isFibonacciPrime(num) {
      if (isSquare(5 * num * num + 4) || isSquare(5 * num * num - 4)) {
        return true;
      }
      return false;
    }
  
    function isSquare(n) {
      return Math.sqrt(n) % 1 === 0;
    }
  
    const result = document.getElementById("result");
    if (isPrime(number) && isFibonacciPrime(number)) {
      result.innerText = `${number} é um número primo de Fibonacci.`;
    } else {
      result.innerText = `${number} não é um número primo de Fibonacci.`;
    }
  }
  