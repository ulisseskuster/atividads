function voltar() {
    window.history.back();
  }
  
  function calcularFatorial() {
    const number = parseInt(document.getElementById("number").value);
    let factorial = 1;
  
    if (number >= 0) {
      for (let i = 1; i <= number; i++) {
        factorial *= i;
      }
    } else {
      factorial = "Indefinido";
    }
  
    const result = document.getElementById("result");
    result.innerText = `Fatorial de ${number}: ${factorial}`;
  }
  