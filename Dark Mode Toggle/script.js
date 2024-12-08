const modeToggle = document.getElementById('mode-toggle');
let isDarkMode = false;

modeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
  document.body.style.color = isDarkMode ? 'white' : 'black';
  document.getElementById('demo').innerHTML=
    isDarkMode ? "Dark Mode Toggle Example." : "Light Mode Toggle Example.";
  modeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});