function voltar() {
    window.history.back();
  }
  
  function gerarCor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
    const colorElement = document.getElementById("color");
    colorElement.style.backgroundColor = randomColor;
    colorElement.innerText = randomColor;
  }
  