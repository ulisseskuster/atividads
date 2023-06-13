function voltar() {
    window.history.back();
  }
  
  function contarVogais() {
    const text = document.getElementById("text").value;
    const vowels = text.toLowerCase().match(/[aeiou]/g);
    const count = vowels ? vowels.length : 0;
  
    const result = document.getElementById("result");
    result.innerText = `A quantidade de vogais é: ${count}`;
  }
  