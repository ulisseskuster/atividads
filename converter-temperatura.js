function voltar() {
    window.history.back();
  }
  
  function converterTemperatura() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9 / 5) + 32;
  
    const result = document.getElementById("result");
    result.innerText = `${celsius} graus Celsius são equivalentes a ${fahrenheit.toFixed(2)} graus Fahrenheit.`;
  }
  