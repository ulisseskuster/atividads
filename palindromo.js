function voltar() {
    window.history.back();
  }
  
  function verificarPalindromo() {
    const text = document.getElementById("text").value;
    const reversedText = text.split("").reverse().join("");
    const isPalindromo = text === reversedText;
  
    const result = document.getElementById("result");
    result.innerText = isPalindromo ? `${text} é um palíndromo.` : `${text} não é um palíndromo.`;
  }
  