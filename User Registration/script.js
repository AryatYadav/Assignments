const registrationForm = document.getElementById("registrationForm");
const registeredUsers = document.getElementById("registeredUsers");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userCard = document.createElement("div");
  userCard.classList.add("card");
  userCard.innerHTML = `
    <h3>${firstName} ${lastName}</h3>
    <p>Email: ${email}</p>
  `;
  registeredUsers.appendChild(userCard);
  registrationForm.reset()
});