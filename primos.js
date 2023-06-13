function voltar() {
    window.history.back();
  }
  
  function verificarPrimo() {
    const number = parseInt(document.getElementById("number").value);
    let isPrime = true;
  
    if (number === 1) {
      isPrime = false;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    } else {
      isPrime = false;
    }
  
    const result = document.getElementById("result");
    result.innerText = isPrime ? `${number} é primo.` : `${number} não é primo.`;
  }
  