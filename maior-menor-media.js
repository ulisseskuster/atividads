function voltar() {
    window.history.back();
  }
  
  function calcular() {
    const numbers = document.getElementById("numbers").value.split(",").map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
  
    const result = document.getElementById("result");
    result.innerText = `Maior: ${max}, Menor: ${min}, Média: ${average.toFixed(2)}`;
  }
  