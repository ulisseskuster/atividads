function voltar() {
    window.history.back();
  }
  
  function verificarQuadradoPerfeito() {
    const number = parseInt(document.getElementById("number").value);
    const squareRoot = Math.sqrt(number);
  
    const result = document.getElementById("result");
    if (Number.isInteger(squareRoot)) {
      result.innerText = `${number} é um quadrado perfeito.`;
    } else {
      result.innerText = `${number} não é um quadrado perfeito.`;
    }
  }
  