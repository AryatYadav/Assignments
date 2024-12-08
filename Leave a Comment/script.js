const comment = document.getElementById('comment');
const charCount = document.querySelector('.char-count');
const submitButton = document.getElementById('submit');

comment.addEventListener('input', () => {
  const currentLength = comment.value.length;
  charCount.textContent = `${currentLength} / 200`;
  if (currentLength >= 200) {
    charCount.classList.add('red');
  } else {
    charCount.classList.remove('red');
  }
});

submitButton.addEventListener('click', () => {
  // Add your logic here to handle comment submission.
});