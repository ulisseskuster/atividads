function voltar() {
    window.history.back();
  }
  
  function inverterString() {
    const text = document.getElementById("text").value;
    const reversedText = text.split("").reverse().join("");
  
    const result = document.getElementById("result");
    result.innerText = `String invertida: ${reversedText}`;
  }
  