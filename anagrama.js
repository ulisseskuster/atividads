function voltar() {
    window.history.back();
  }
  
  function verificarAnagrama() {
    const word1 = document.getElementById("word1").value.toLowerCase();
    const word2 = document.getElementById("word2").value.toLowerCase();
    const isAnagrama = word1.split("").sort().join("") === word2.split("").sort().join("");
  
    const result = document.getElementById("result");
    result.innerText = isAnagrama ? `${word1} e ${word2} são anagramas.` : `${word1} e ${word2} não são anagramas.`;
  }
  