function voltar() {
    window.history.back();
  }
  
  function validarSenha() {
    const password = document.getElementById("password").value;
  
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    const result = document.getElementById("result");
    if (hasMinLength && hasUppercase && hasLowercase && hasNumber) {
      result.innerText = "Senha válida.";
    } else {
      result.innerText = "Senha inválida. A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.";
    }
  }
  