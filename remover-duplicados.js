function voltar() {
    window.history.back();
  }
  
  function removerDuplicados() {
    const array = document.getElementById("array").value.split(",");
    const uniqueArray = [...new Set(array)];
  
    const result = document.getElementById("result");
    result.innerText = `Array sem elementos duplicados: ${uniqueArray}`;
  }
  