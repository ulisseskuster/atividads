function voltar() {
    window.history.back();
  }
  
  function encontrarMaiorElemento() {
    const numbers = document.getElementById("numbers").value.split(",").map(Number);
    const max = Math.max(...numbers);
  
    const result = document.getElementById("result");
    result.innerText = `Maior elemento: ${max}`;
  }
  