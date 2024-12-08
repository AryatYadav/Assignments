function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById('captcha-equation').textContent = `${num1} + ${num2}`;
}


generateCaptcha();
function abc()
{
  alert("Login successfully");
}