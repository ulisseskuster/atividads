function voltar() {
    window.history.back();
  }
  
  function contarFrequencia() {
    const numbers = document.getElementById("numbers").value.split(",").map(Number);
    const frequency = {};
  
    for (let i = 0; i < numbers.length; i++) {
      if (frequency[numbers[i]]) {
        frequency[numbers[i]]++;
      } else {
        frequency[numbers[i]] = 1;
      }
    }
  
    const result = document.getElementById("result");
    result.innerText = JSON.stringify(frequency);
  }
  